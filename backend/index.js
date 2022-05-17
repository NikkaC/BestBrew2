/*
  Terminal -> New Terminal
  node backend/index.js 
*/
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;  
const fs = require('fs');
const path = require('path');
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

var sqlPoizvedba = fs.readFileSync(__dirname +'/baza.sql').toString();

//---Testna POVEZAVA in IZVRŠITEV baza.sql----

pool.connect(function(err, client, done){
    if(err){
        console.log('error: ', err);
        process.exit(1);
    }
    client.query(sqlPoizvedba, function(err, result){
        done();
        if(err){
            console.log('error: ', err);
            process.exit(1);
        }
        process.exit(0);
    });
});


app.use(cors());

//----------test na portu localhost:5000/test-----------
app.get("/test", async (req, res) => {
    res.send({ express: 'Test Backenda' });
});

app.get("/piva", async (req, res) => {
    try {
      const vsaPiva = await pool.query("SELECT * FROM pivo");
      res.json(vsaPiva.rows);
    } catch (err) {
      console.error(err.message);
    }
});

app.listen(5000, () => {
    console.log(`Listening on port ${port}`);
  });