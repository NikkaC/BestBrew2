DROP DATABASE IF EXISTS baza;

CREATE DATABASE baza;

DROP TABLE IF EXISTS pivo;
DROP TABLE IF EXISTS ocena;
DROP TABLE IF EXISTS uporabnik;
DROP TABLE IF EXISTS priljubljeno_pivo;
DROP TABLE IF EXISTS pivovarna;
DROP TABLE IF EXISTS seznam_piva;

CREATE TABLE pivo (
	idPivo INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    tk_pivovarna INT NOT NULL,
    naziv VARCHAR(45),
    alkohol VARCHAR(45),
    vrsta VARCHAR(45),
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
ALTER TABLE pivo ADD CONSTRAINT tk_pivo_pivovarna FOREIGN KEY (tk_pivovarna) REFERENCES pivovarna(idPivovarna) ON DELETE CASCADE ON UPDATE NO ACTION;

INSERT INTO uporabnik VALUES (NULL, 'Jože', 'Gorišek', "joze.gorisek@gmail.com", "gorisek5", "1975-05-01");
INSERT INTO uporabnik VALUES (NULL, "Buba", "Corelli", "imperia@gmail.com", "bacamruze", "1989-09-22");
INSERT INTO uporabnik VALUES (NULL, "Jala", "Brat", "jala.brat@gmail.com", "partijam", "1986-10-16");
INSERT INTO uporabnik VALUES (NULL, "Alfi", "Nipič", "alfi.nipic@gmail.com", "pohorje", "1944-09-17");
INSERT INTO uporabnik VALUES (NULL, "Saša", "Lendero", "sasa.lendero@gmail.com", "mandoline", "1973-08-06");
INSERT INTO uporabnik VALUES (NULL, "Robert", "Pešut", "robert.pesut@gmail.com", "magnifico", "1965-12-01");
INSERT INTO uporabnik VALUES (NULL, "Tomaž", "Mihelič", "tomaz.mihelic@gmail.com", "toplovodar", "1979-06-21");
INSERT INTO uporabnik VALUES (NULL, "Jan", "Plestenjak", "jan.plestenjak@gmail.com", "soba102", "1973-03-27");
INSERT INTO uporabnik VALUES (NULL, "Stevie", "Wonder", "stevie.wonder@gmail.com", "tjema", "1950-05-13");
INSERT INTO uporabnik VALUES (NULL, "Fredi", "Miler", "fredi.miler@gmail.com", "obrv", "1967-05-22");

INSERT INTO pivovarna VALUES (NULL, "Union", 430, 377);
INSERT INTO pivovarna VALUES (NULL, "Heineken", 390, 580);
INSERT INTO pivovarna VALUES (NULL, "Laško", 441, 380);
INSERT INTO pivovarna VALUES (NULL, "Staropramen", 478, 499);
INSERT INTO pivovarna VALUES (NULL, "Carlsberg", 444, 555);
INSERT INTO pivovarna VALUES (NULL, "Guinness", 439, 12); 
INSERT INTO pivovarna VALUES (NULL, "Green Golden Brewing", 447, 520);

INSERT INTO seznamPiva VALUES(NULL, 1);
INSERT INTO seznamPiva VALUES(NULL, 2);
INSERT INTO seznamPiva VALUES(NULL, 3);
INSERT INTO seznamPiva VALUES(NULL, 4);
INSERT INTO seznamPiva VALUES(NULL, 5);
INSERT INTO seznamPiva VALUES(NULL, 6);
INSERT INTO seznamPiva VALUES(NULL, 7);
INSERT INTO seznamPiva VALUES(NULL, 8);
INSERT INTO seznamPiva VALUES(NULL, 9);
INSERT INTO seznamPiva VALUES(NULL, 10);

INSERT INTO pivo VALUES (NULL, 1, "Nefiltrirano", "alkoholno", "Nefiltrirano", 3, 3, 4, 87267);
INSERT INTO pivo VALUES (NULL, 1, "Brezalkoholno union", "brezalkoholno", "svetlo", 2, 2, 3, 83782);
INSERT INTO pivo VALUES (NULL, 3, "Zlatorog", "alkoholno", "svetlo", 3, 5, 3, 52938);
INSERT INTO pivo VALUES (NULL, 2, "Heineken", "alkoholno", "svetlo", 4, 5, 4, 30293);
INSERT INTO pivo VALUES (NULL, 2, "Heineken 0,0", "brezalkoholno", "svetlo", 2, 3, 4, 38293);
INSERT INTO pivo VALUES (NULL, 4, "Staropramen", "alkoholno", "svetlo", 3, 4, 4, 63948);
INSERT INTO pivo VALUES (NULL, 5, "Carlsberg", "alkoholno" "svetlo", 4, 4, 3, 42938);
INSERT INTO pivo VALUES (NULL, 6, "Guinness", "alkoholno", "temno", 4, 3, 2, 18349);
INSERT INTO pivo VALUES (NULL, 3, "Ipa pivo", "alkoholno", "ipa", 3, 4, 5, 51829);
INSERT INTO pivo VALUES (NULL, 3, "Zlatorog temno", "alkoholno", "temno", 5, 3, 3, 58293);
INSERT INTO pivo VALUES (NULL, 1, "Union", "alkoholno", "svetlo", 4, 4, 3, 89320);
INSERT INTO pivo VALUES (NULL, 1, "Radler grenivka", "alkoholno", "radler", 2, 3, 3, 84410);
INSERT INTO pivo VALUES (NULL, 1, "Smile", "alkoholno", "svetlo", 1, 3, 4, 82304);
INSERT INTO pivo VALUES (NULL, 3, "Temni malt", "brezalkoholno", "malt", 1, 2, 4, 52938);
INSERT INTO pivo VALUES (NULL, 3, "Pšenično pivo", "alkoholno", "pšenično", 3, 3, 3, 52039);
INSERT INTO pivo VALUES (NULL, 3, "Golding", "alkoholno", "svetlo", 3, 5, 4, 56293);
INSERT INTO pivo VALUES (NULL, 3, "Zlatorog 0,0", "brezalkoholno", "svetlo", 2, 3, 2, 59321);
INSERT INTO pivo VALUES (NULL, 5, "Carlsberg 0,0", "brezalkoholno", "svetlo", 2, 4, 3, 41928);
INSERT INTO pivo VALUES (NULL, 5, "Nordic Ale", "brezalkoholno", "svetlo", 3, 3, 2, 49283);
INSERT INTO pivo VALUES (NULL, 5, "1664 Bio Non Filtrée", "alkoholno", "nefiltrirano", 4, 3, 4, 41829);
INSERT INTO pivo VALUES (NULL, 5, "1664 Créations French Style IPA", "alkoholno", "ipa", 3, 4, 3, 43928);
INSERT INTO pivo VALUES (NULL, 5, "Alivaria Beloe Zoloto", "alkoholno", "pšenično", 4, 3, 4, 43726);
INSERT INTO pivo VALUES (NULL, 5, "Arsenalnoe Non-alcoholic", "brezalkoholno", "svetlo", 2, 2, 3, 48279);
INSERT INTO pivo VALUES (NULL, 4, "Staropramen Dark", "alkoholno", "temno", 5, 3, 4, 69283);
INSERT INTO pivo VALUES (NULL, 4, "Staropramen Premium", "alkoholno", "svetlo", 3, 5, 4, 63293);
INSERT INTO pivo VALUES (NULL, 4, "Staropramen nefiltrirano", "alkoholno", "nefiltrirano", 4, 3, 4, 63534);
INSERT INTO pivo VALUES (NULL, 4, "Staropramen brezalkoholno", "brezalkoholno", "svetlo", 2, 3, 3, 69382);
INSERT INTO pivo VALUES (NULL, 6, "Guinness Draught", "alkoholno", "temno", 3, 4, 5, 19238);
INSERT INTO pivo VALUES (NULL, 6, "Guinness Foreign Extra Scout", "alkoholno", "temno", 4, 3, 4, 17383);
INSERT INTO pivo VALUES (NULL, 6, "Nitro IPA", "alkoholno", "ipa", 3, 4, 5, 19348);
INSERT INTO pivo VALUES (NULL, 6, "Blond American Lager", "alkoholno", "svetlo", 3, 5, 4, 12946);
INSERT INTO pivo VALUES (NULL, 6, "Hop House 13 Lager", "alkoholno", "svetlo", 4, 4, 3, 18364);
INSERT INTO pivo VALUES (NULL, 6, "Golden Ale", "alkoholno", "svetlo", 3, 5, 4, 14832);
INSERT INTO pivo VALUES (NULL, 6, "Dublin Porter", "alkoholno", "svetlo", 4, 3, 3, 13203);
INSERT INTO pivo VALUES (NULL, 2, "Sodček Draught Kreg", "alkoholno", "svetlo", 3, 4, 5, 17826);
INSERT INTO pivo VALUES (NULL, 2, "Extra Cold", "alkoholno", "svetlo", 3, 5, 5, 13495);
INSERT INTO pivo VALUES (NULL, 7, "Rocket Queen", "alkoholno", "ipa", 4, 4, 3, 28447);
INSERT INTO pivo VALUES (NULL, 7, "Fear and Loathing in Belgrade", "alkoholno", "ipa", 3, 3, 5, 29384);
INSERT INTO pivo VALUES (NULL, 7, "Wolf Pack", "alkoholno", "svetlo", 4, 4, 2, 27493);
INSERT INTO pivo VALUES (NULL, 7, "Best Buds", "alkoholno", "svetlo", 3, 3, 4, 29484);
INSERT INTO pivo VALUES (NULL, 7, "Drargon Slayer", "alkoholno", "ipa", 3, 4, 5, 22837);
INSERT INTO pivo VALUES (NULL, 7, "Emergency Landing", "alkoholno", "neipa", 4, 3, 5, 21928);
INSERT INTO pivo VALUES (NULL, 7, "Povodni mož", "alkoholno", "ipa", 2, 5, 3, 28374);
INSERT INTO pivo VALUES (NULL, 7, "Cashmere", "alkoholno", "neipa", 3, 4, 2, 21239);
INSERT INTO pivo VALUES (NULL, 7, "Sultans of Hops", "alkoholno", "ipa", 4, 3, 5, 23948);
INSERT INTO pivo VALUES (NULL, 7, "Forbidden fruit", "alkoholno", "svetlo", 3, 4, 4, 29398);
INSERT INTO pivo VALUES (NULL, 7, "Komb4jn", "alkoholno", "svetlo", 3, 3, 4, 27368);
INSERT INTO pivo VALUES (NULL, 7, "Papagena", "alkoholno", "ipa", 5, 2, 3, 28347);
INSERT INTO pivo VALUES (NULL, 7, "Oli Warz", "alkoholno", "temno", 5, 3, 3, 26384);
INSERT INTO pivo VALUES (NULL, 7, "Franci", "alkoholno", "svetlo", 4, 4, 3, 28464);
