/*
  Terminal -> New Terminal
  node backend/ustvariPostgresTabele.js.js 
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
  connectionString: "postgres://eljaceluwvcisq:e878209cad80cb1c2bb3d63f89cf05a92b587bf00a302c1d5ba770816bc5d0a0@ec2-54-246-185-161.eu-west-1.compute.amazonaws.com:5432/da6r0qs3v9mvs5", //geslo,username,database,user
  ssl: {
    rejectUnauthorized: false
  }
}
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
