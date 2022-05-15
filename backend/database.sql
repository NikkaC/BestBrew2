CREATE DATABASE praktikum;

CREATE TABLE "piva" (
  "id_piva" SERIAL PRIMARY KEY,
  "ime" varchar,
  "vrsta_piva" varchar,
  "piovovarna" varchar,
  "barva" varchar,
  "pena" varchar,
  "okus" varchar,
  "vonj" varchar,
  "slika" varchar,
  "crtna_koda" longtext,
  "koordinata_x" longtext,
  "koordinata_y" longtext
);

CREATE TABLE "uporabniki" (
  "id_uporabniki" SERIAL PRIMARY KEY,
  "ime" varchar,
  "email" varchar,
  "slika" varchar,
  "seznam_priljubljenih_fk" int 
);

CREATE TABLE "seznam_priljubljenih" (
  "id_seznam_priljubljenih" SERIAL PRIMARY KEY,
  "fk_uporabnik" int, 
  "fk_pivo" int 
);

ALTER TABLE "seznam_priljubljenih" ADD FOREIGN KEY ("fk_uporabnik") REFERENCES "uporabniki" ("seznam_priljubljenih_fk");

ALTER TABLE "piva" ADD FOREIGN KEY ("id_piva") REFERENCES "seznam_priljubljenih" ("fk_pivo");


