const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./connect");
const port = process.env.PORT || 5000;  
const fs = require('fs');
const path = require('path');


// Terminal -> New Terminal
// node .\backend\index.js

app.use(cors());

app.get("/test", async (req, res) => {
    res.send({ express: 'Test Backenda' });
});


app.get('/ustvariTabele', async(req, res) => {
  const dataSQL = fs.readFileSync(path.join(__dirname, './database.sql')).toString();
    const query = await db.query(dataSQL,  (err, result) => {
      if (err){
          throw err;
      }else{
          res.send("Query run successfully");
      }
    });
  })


app.get("/piva", async (req, res) => {
    try {
      const vsaPiva = await db.query("SELECT * FROM pivo");
      res.json(vsaPiva.rows);
    } catch (err) {
      console.error(err.message);
    }
});

app.listen(5000, () => {
    console.log(`Listening on port ${port}`);
  });