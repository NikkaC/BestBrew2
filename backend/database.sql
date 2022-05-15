DROP TABLE IF EXISTS "piva";
DROP TABLE IF EXISTS "uporabniki";
DROP TABLE IF EXISTS "seznam_priljubljenih";

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
  "crtna_koda" int,
  "koordinata_x" int,
  "koordinata_y" int
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
--POTREBNE FORGIN KEY POVEZAVA, INSERTI....



