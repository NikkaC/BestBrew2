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

app.use(cors());

//----------test na portu localhost:5000/test-----------
app.get("/test", async (req, res) => {
    res.send({ express: 'Test Backenda' });
});

app.get("/Vsapiva", async (req, res) => {
    try {
      const vsaPiva = await pool.query("SELECT * FROM pivo");
      res.json(vsaPiva.rows);
    } catch (err) {
      console.error(err.message);
    }
});

app.get("/VseUporabnike", async (req, res) => {
  try {
    const visUporabniki = await pool.query("SELECT * FROM uporabnik");
    res.json(visUporabniki.rows);
  } catch (err) {
    console.error(err.message);
  }
});


app.post("/dodajUporabnika", async (req, res) => {
  const {ime,priimek,email,geslo,datum_rojstva} = req.body

  pool.query('INSERT INTO uporabnik (&1, &2, &3, &4, &5)', [ ime, priimek,email,geslo,datum_rojstva], (error, results) => {
    if (error) {
      throw error
    }
    res.status(201).send(`Uporabnik added with ID: ${results.insertId}`)
  })
});

app.post("/dodajPivo", async (req, res) => {
  const {naziv, alkohol,vrsta,pena,okus,vonj,crtna_koda } = req.body

  pool.query('INSERT INTO pivo (&1, &2, &3, &4, &5, &6, &7)', [ naziv, alkohol,vrsta,pena,okus,vonj,crtna_koda], (error, results) => {
    if (error) {
      throw error
    }
    res.status(201).send(`Pivo added with ID: ${results.insertId}`)
  })
});

app.listen(5000, () => {
    console.log(`Listening on port ${port}`);
  });