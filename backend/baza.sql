DROP TABLE IF EXISTS ocena;
DROP TABLE IF EXISTS priljubljeno_pivo;
DROP TABLE IF EXISTS seznam_piva;
DROP TABLE IF EXISTS pivo;
DROP TABLE IF EXISTS uporabnik;
DROP TABLE IF EXISTS pivovarna;

CREATE TABLE pivo (
	idPivo serial PRIMARY KEY,
    naziv VARCHAR(100),
    vrsta_piva VARCHAR(100),
    barva VARCHAR(100),
    pena INT,
    okus INT,
    vonj INT,
    crtna_koda INT
);

CREATE TABLE uporabnik (
	idUporabnik serial PRIMARY KEY NOT NULL,
    ime VARCHAR(100),
    priimek VARCHAR(100),
    email VARCHAR(100),
    geslo VARCHAR(100),
    datum_rojstva DATE
);


CREATE TABLE pivovarna (
	idPivovarna serial PRIMARY KEY NOT NULL,
    naziv_pivovarne VARCHAR(100),
    x_koordinata NUMERIC(5,2),
    y_koordinata NUMERIC(5,2)
);


CREATE TABLE ocena (
	idOcena serial PRIMARY KEY NOT NULL,
    vrednost INT,
    tk_pivo INT NOT NULL,
    tk_uporabnik INT NOT NULL
);

CREATE TABLE seznam_piva (
	idSeznam_piva serial PRIMARY KEY NOT NULL,
    tk_uporabnik INT NOT NULL
);

CREATE TABLE priljubljeno_pivo (
	idPriljubljena_piva serial PRIMARY KEY NOT NULL,
    tk_pivo INT NOT NULL,
    tk_seznam_piva INT NOT NULL
);

ALTER TABLE seznam_piva ADD CONSTRAINT tk_seznamPiva_uporabnik FOREIGN KEY (tk_uporabnik) REFERENCES uporabnik(idUporabnik) ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE priljubljeno_pivo ADD CONSTRAINT tk_priljubljenoPivo_pivo FOREIGN KEY (tk_pivo) REFERENCES pivo(idPivo) ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE priljubljeno_pivo ADD CONSTRAINT tk_priljubljenoPivo_seznamPiva FOREIGN KEY (tk_seznam_piva) REFERENCES seznam_piva(idSeznam_piva) ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE ocena ADD CONSTRAINT tk_ocena_uporabnik FOREIGN KEY (tk_uporabnik) REFERENCES uporabnik(idUporabnik) ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE ocena ADD CONSTRAINT tk_ocena_pivo FOREIGN KEY (tk_pivo) REFERENCES pivo(idPivo) ON DELETE CASCADE ON UPDATE NO ACTION;

INSERT INTO pivo (naziv, vrsta_piva, barva, pena, okus, vonj, crtna_koda)
VALUES ('Laško', 'svetlo', 5,3,2,5, 4820034920749),
       ('Union', 'svetlo', 3,4,2,4, 4820034920749),
       ('Staropramen', 'svetlo', 2,5,3,3, 4820034920749),
       ('Bernard', 'craft', 5,3,4,1, 4820034920749),
       ('Guinness', 'temno', 1,3,2,5, 4820034920749),
       ('Ožujsko', 'svetlo', 5,4,4,5, 4820034920749),
       ('Union nefiltrirano', 'svetlo', 5,5,5,5, 4820034920749),
       ('Heineken', 'svetlo', 1,3,2,5, 4820034920749);

INSERT INTO uporabnik (ime, priimek, email, geslo, datum_rojstva)
VALUES ('Klemen', 'Boševski', 'klemen.bosevski@gmail.com','klemen123','1997-08-24'),
       ('Rok', 'Kovač', 'rok.kovac@gmail.com','rok12345','2000-02-21'),
       ('Tea', 'Sotlar', 'tea.sotlar@gmail.com','tea12345','2001-04-16'),
       ('Mia', 'Meža', 'mia.meza@gmail.com','mia12345','1999-08-04'),
       ('Nina', 'Lešek', 'nina.lesek@gmail.com','nina1234','2002-12-12');


INSERT INTO pivovarna (naziv_pivovarne, x_koordinata, y_koordinata)
VALUES ('Pivovarna Union', '46.05986316392974', '14.498510776236131'),
       ('Pivovarna Laško', '46.150995255321774', '15.237957791395566');

INSERT INTO ocena (vrednost, tk_pivo, tk_uporabnik)
VALUES (5, 3, 1),
       (3, 1, 1);

INSERT INTO seznam_piva (tk_uporabnik)
VALUES  (1),
        (2),
        (3);

INSERT INTO priljubljeno_pivo (tk_pivo, tk_seznam_piva)
VALUES  (1,1),
        (3,1),
        (3,1),
        (6,2),
        (5,2),
        (4,2);
       