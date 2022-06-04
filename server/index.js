/*
  Terminal -> New Terminal
  nodemon index.js 
*/
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5001;  
const bodyParser=require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
const Pool = require("pg").Pool;
const serverless = require("serverless-http");
const fs = require('fs');

let poizvedbaSQL = fs.readFileSync(__dirname + '/baza.sql').toString();

//--------CONFIG ZA POVEZAVO PREKO URI-------
const proConfig = {
  connectionString: "postgres://eljaceluwvcisq:e878209cad80cb1c2bb3d63f89cf05a92b587bf00a302c1d5ba770816bc5d0a0@ec2-54-246-185-161.eu-west-1.compute.amazonaws.com:5432/da6r0qs3v9mvs5", //geslo,username,database,user
  ssl: {
    rejectUnauthorized: false
  }
}
//-------------Spremenljivka-----------------
const pool = new Pool(proConfig);

/*
pool.connect(function(err, client, done) {
    if(err) {
      console.log(err);
      process.exit(1);
    }
    client.query(poizvedbaSQL, function(err, result) {
        done();
        if(err) {
          console.log(err);
          process.exit(1);
        }
        process.exit(0);
    });
});
*/

app.use(cors({
  origin: '*'
}));

//----test na portu localhost:5000/test-----
app.get("/test", async (req, res) => {
    res.send({ express: 'Test Backenda' });
});
//-------------VRAČA VSA PIVA-----------------
app.get("/Vsapiva", async (req, res) => {
    try {
      const vsaPiva = await pool.query("SELECT pivo.*,naziv_pivovarne FROM pivo LEFT JOIN pivovarna ON pivo.tk_pivovarna=pivovarna.idPivovarna;");
      res.json(vsaPiva.rows);
    } catch (err) {
      console.error(err.message);
    }
});

//-------------VRAČA PIVO z ID-----------------
app.get("/pivo/:id", async (req, res) => {
  const id = parseInt(req.params.id)

  pool.query('SELECT * FROM pivo WHERE idPivo = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
});
//----------VRAČA VSE uporabnike--------------
app.get("/VseUporabnike", async (req, res) => {
  try {
    const visUporabniki = await pool.query("SELECT * FROM uporabnik");
    res.json(visUporabniki.rows);
  } catch (err) {
    console.error(err.message);
  }
});
//-----VRAČA ID-je seznamov uporabnika--------------
app.get("/seznamiUporabnikov/:idUporabnik", async (req, res) => {
  const id = parseInt(req.params.idUporabnik)
  try {
    const vsiSeznami = await pool.query("SELECT idSeznam_piva FROM seznam_piva LEFT JOIN uporabnik ON uporabnik.iduporabnik=seznam_piva.tk_uporabnik  WHERE tk_uporabnik=$1;", [id], );
    res.json(vsiSeznami.rows);
  } catch (err) {
    console.error(err.message);
  }
});
//-----VRAČA vsa Piva znotraj seznama[idSeznama] določenega uporabnika[idUporabnik]--------------
app.get("/vsaPriljubljenaPiva/:idUporabnik", async (req, res) => {
  const idUporabnik = parseInt(req.params.idUporabnik)
  try {
    const vsiSeznami = await pool.query("SELECT pivo.*,idPriljubljena_piva,idseznam_piva,ocena FROM pivo INNER JOIN priljubljeno_pivo ON pivo.idPivo = priljubljeno_pivo.tk_pivo INNER JOIN seznam_Piva ON priljubljeno_pivo.tk_seznam_piva = seznam_Piva.idseznam_piva INNER JOIN uporabnik ON uporabnik.idUporabnik = seznam_Piva.tk_uporabnik WHERE uporabnik.idUporabnik = $1;", [idUporabnik], );
    res.json(vsiSeznami.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//-------------Doda eno pivo---------------
app.post("/dodajPivo", async (req, res) => {
  const {tk_pivovarna,naziv, alkohol,vrsta,pena,okus,vonj,crtna_koda } = req.body

  pool.query('INSERT INTO pivo (tk_pivovarna,naziv,alkohol,vrsta,pena,okus,vonj,crtna_koda) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [tk_pivovarna,naziv, alkohol,vrsta,pena,okus,vonj,crtna_koda], (error, results) => {
    if (error) {
      throw error
    }
    res.status(201).send(`Pivo added`)
  })
});

//-------------Prikaže pivovarne na mapi------
app.get("/map", async (req, res) => {
    try {
        const vsePivovarne = await pool.query("SELECT * FROM pivovarna;");
        res.json(vsePivovarne.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//-----------------Shrani uporabnika v bazo
app.post("/shraniUporabnika", async (req, res) => {  
  try {
    let seNeObstaja = true;
    
    const {ime, priimek, email} = req.body;

      const vsiUporabniki = await pool.query("SELECT * FROM uporabnik;");
      vsiUporabniki.rows.forEach((uporabnik) => {
        if(ime == uporabnik.ime && priimek == uporabnik.priimek && email == uporabnik.email) {
          // uporabnik je že v bazi, funkcija vrne že obstoječega uporabnika
          res.json(uporabnik);
          seNeObstaja = false;
        }
      });

      // uporabnik v bazi še ne obstaja, uporabnika zapišemo v bazo in vrnemo njegov id
      if(seNeObstaja) {
        pool.query('INSERT INTO uporabnik (ime, priimek, email) VALUES ($1, $2, $3);', [ime, priimek, email], (error, response) => {
          if(error) {
            throw error;
          }
        });
        const kreiranUporabnik = await pool.query("SELECT * FROM uporabnik WHERE uporabnik.email = $1;", email);
        res.json(kreiranUporabnik);
      }

    } catch(error) {
      console.error(error.message);
    }
});
//---------------Brisanje PIVA iz seznama-------------
app.delete("/odstraniPivoSseznama/:idPivo/:idSeznam", async (req, res) => {
  const idPivo = parseInt(req.params.idPivo)
  const idSeznam = parseInt(req.params.idSeznam)
  try {
    await pool.query("DELETE FROM priljubljeno_pivo WHERE tk_pivo = $1 AND tk_seznam_piva = $2;", [idPivo,idSeznam]);
    res.send("DELETE Piva(ID):"+idPivo+"s seznama(ID):"+idSeznam);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/dodajPivoNaSeznam/:idPivo/:idSeznam", async (req, res) => {
  const idPivo = parseInt(req.params.idPivo)
  const idSeznam = parseInt(req.params.idSeznam)
  //const idUporabnik = parseInt(req.params.idUporabnik)
  try {
    const vsiSeznami = await pool.query("INSERT INTO priljubljeno_pivo (tk_pivo, tk_seznam_piva) VALUES ($1, $2);",[idPivo,idSeznam]);
    res.send("Dodano Pivo(ID):"+idPivo+"na seznam(ID):"+idSeznam);
  } catch (err) {
    console.error(err.message);
  }
});


app.get("/posodobiOceno/:event/:idPriljubljenaPiva", async (req, res) => {
  const oceno = parseInt(req.params.event);
  const idPriljubljenaPiva =req.params.idPriljubljenaPiva;
  //const idUporabnik = parseInt(req.params.idUporabnik)
  try {
    await pool.query("UPDATE priljubljeno_pivo SET ocena = $1 WHERE idpriljubljena_piva = $2;",[oceno,idPriljubljenaPiva]);
    res.send("Spremenjena ocena: "+oceno+"na priljublenemu Pivu(ID): "+idPriljubljenaPiva);
  } catch (err) {
    console.error(err.message);
  }
});





app.listen(5001, () => {
    console.log(`Listening on port ${port}`);
  });

module.exports = app;

module.exports.handler = serverless(app);