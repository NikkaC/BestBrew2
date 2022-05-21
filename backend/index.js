/*
  Terminal -> New Terminal
  node backend/index.js 
*/
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5001;  
const bodyParser=require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
const Pool = require("pg").Pool;

//--------CONFIG ZA POVEZAVO PREKO URI-------
const proConfig = {
  connectionString: "postgres://jzzmbybrrlfzvf:eb31bfd4a0b6b53a56f7b480ccf28b4aa4fda39475fe1765df64e03c33f5bc8d@ec2-176-34-211-0.eu-west-1.compute.amazonaws.com:5432/deqj5mqahdj49p", //geslo,username,database,user
  ssl: {
    rejectUnauthorized: false
  }
}
//-------------Spremenljivka-----------------
const pool = new Pool(proConfig);

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
      const vsaPiva = await pool.query("SELECT naziv,naziv_pivovarne,alkohol,vrsta,pena,okus,vonj,crtna_koda FROM pivo LEFT JOIN pivovarna ON pivo.tk_pivovarna=pivovarna.idPivovarna;");
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
  const idSeznama = parseInt(req.params.idSeznama)
  const idUporabnik = parseInt(req.params.idUporabnik)
  try {
    const vsiSeznami = await pool.query("SELECT pivo.*,idseznam_piva FROM pivo INNER JOIN priljubljeno_pivo ON pivo.idPivo = priljubljeno_pivo.tk_pivo INNER JOIN seznam_Piva ON priljubljeno_pivo.tk_seznam_piva = seznam_Piva.idseznam_piva INNER JOIN uporabnik ON uporabnik.idUporabnik = seznam_Piva.tk_uporabnik WHERE uporabnik.idUporabnik = $1;", [idUporabnik], );
    res.json(vsiSeznami.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//----------Doda enega uporabnika------------
app.post("/dodajUporabnika", async (req, res) => {
  const {ime,priimek,email} = req.body

  pool.query('INSERT INTO uporabnik (ime,priimek,email) VALUES ($1, $2, $3)', [ ime, priimek,email], (error, results) => {
    if (error) {
      throw error
    }
    res.status(201).send(`Uporabnik added`)
  })
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



app.listen(5001, () => {
    console.log(`Listening on port ${port}`);
  });