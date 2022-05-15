DROP TABLE IF EXISTS pivo;
DROP TABLE IF EXISTS ocena;
DROP TABLE IF EXISTS uporabnik;
DROP TABLE IF EXISTS priljubljeno_pivo;
DROP TABLE IF EXISTS pivovarna;
DROP TABLE IF EXISTS seznam_piva;

CREATE TABLE pivo (
	idPivo INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    naziv VARCHAR(45),
    vrsta_piva VARCHAR(45),
    barva VARCHAR(45),
    pena INT,
    okus INT,
    vonj INT,
    crtna_koda INT
);

CREATE TABLE ocena (
	idOcena INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    vrednost INT,
    tk_pivo INT NOT NULL,
    tk_uporabnik INT NOT NULL
);

CREATE TABLE pivovarna (
	idPivovarna INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    naziv_pivovarne VARCHAR(45),
    x_koordinata DECIMAL(3, 4),
    y_koordinata DECIMAL(3, 4)
);

CREATE TABLE uporabnik (
	idUporabnik INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    ime VARCHAR(45),
    priimek VARCHAR(45),
    email VARCHAR(45),
    geslo VARCHAR(45),
    datum_rojstva DATETIME
);

CREATE TABLE seznam_piva (
	idSeznam_piva INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    tk_uporabnik INT NOT NULL
);

CREATE TABLE priljubljeno_pivo (
	idPriljubljena_piva INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    tk_pivo INT NOT NULL,
    tk_seznam_piva INT NOT NULL
);

ALTER TABLE seznam_piva ADD CONSTRAINT tk_seznamPiva_uporabnik FOREIGN KEY (tk_uporabnik) REFERENCES uporabnik(idUporabnik) ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE priljubljeno_pivo ADD CONSTRAINT tk_priljubljenoPivo_pivo FOREIGN KEY (tk_pivo) REFERENCES pivo(idPivo) ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE priljubljeno_pivo ADD CONSTRAINT tk_priljubljenoPivo_seznamPiva FOREIGN KEY (tk_seznam_piva) REFERENCES seznam_piva(idSeznam_piva) ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE ocena ADD CONSTRAINT tk_ocena_uporabnik FOREIGN KEY (tk_uporabnik) REFERENCES uporabnik(idUporabnik) ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE ocena ADD CONSTRAINT tk_ocena_pivo FOREIGN KEY (tk_pivo) REFERENCES pivo(idPivo) ON DELETE CASCADE ON UPDATE NO ACTION;
    