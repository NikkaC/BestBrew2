DROP TABLE IF EXISTS ocena;
DROP TABLE IF EXISTS priljubljeno_pivo;
DROP TABLE IF EXISTS seznam_piva;
DROP TABLE IF EXISTS pivo;
DROP TABLE IF EXISTS uporabnik;
DROP TABLE IF EXISTS pivovarna;

CREATE TABLE pivo (
	idPivo serial PRIMARY KEY NOT NULL,
    tk_pivovarna INT,
    naziv VARCHAR(45),
    alkohol VARCHAR(45),
    vrsta VARCHAR(45),
    pena INT,
    okus INT,
    vonj INT,
    crtna_koda BIGINT
);

CREATE TABLE uporabnik (
	idUporabnik serial PRIMARY KEY NOT NULL,
    ime VARCHAR(100),
    priimek VARCHAR(100),
    email VARCHAR(100)
);


CREATE TABLE pivovarna (
	idPivovarna serial PRIMARY KEY NOT NULL,
    naziv_pivovarne VARCHAR(100),
    x_koordinata NUMERIC(5,2),
    y_koordinata NUMERIC(5,2)
);


CREATE TABLE ocena (
	idOcena serial PRIMARY KEY NOT NULL,
    tk_pivo INT NOT NULL,
    tk_uporabnik INT NOT NULL,
    vrednost INT
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
ALTER TABLE pivo ADD CONSTRAINT tk_pivo_pivovarna FOREIGN KEY (tk_pivovarna) REFERENCES pivovarna(idPivovarna) ON DELETE CASCADE ON UPDATE NO ACTION;


INSERT INTO uporabnik (ime, priimek, email)
VALUES  ('Jože', 'Gorišek', 'joze.gorisek@gmail.com'),
        ('Buba', 'Corelli', 'imperia@gmail.com'),
        ('Jala', 'Brat', 'jala.brat@gmail.com'),
        ('Alfi', 'Nipič', 'alfi.nipic@gmail.com'),
        ('Saša', 'Lendero', 'sasa.lendero@gmail.com'),
        ('Robert', 'Pešut', 'robert.pesut@gmail.com'),
        ('Tomaž', 'Mihelič', 'tomaz.mihelic@gmail.com'),
        ('Jan', 'Plestenjak', 'jan.plestenjak@gmail.com'),
        ('Stevie', 'Wonder', 'stevie.wonder@gmail.com'),
        ('Fredi', 'Miler', 'fredi.miler@gmail.com');

INSERT INTO pivovarna (naziv_pivovarne, x_koordinata, y_koordinata)
VALUES  ('Union', 430, 377),
        ('Heineken', 390, 580),
        ('Laško', 441, 380),
        ('Staropramen', 478, 499),
        ('Carlsberg', 444, 555),
        ('Guinness', 439, 12),
        ('Green Golden Brewing', 447, 520);

INSERT INTO seznam_Piva (tk_uporabnik)
VALUES  (1),
        (1),
        (3),
        (4),
        (5),
        (6),
        (7),
        (8),
        (9),
        (10);

INSERT INTO pivo (tk_pivovarna, naziv, alkohol, vrsta, pena, okus, vonj, crtna_koda)
VALUES  (1, 'Union Nefiltrirano', 'alkoholno', 'nefiltrirano', 3, 3, 4, 87267),
        (1, 'Union brezalkoholno', 'brezalkoholno', 'svetlo', 2, 2, 3, 83782),
        (3, 'Zlatorog', 'alkoholno', 'svetlo', 3, 5, 3, 52938),
        (2, 'Heineken', 'alkoholno', 'svetlo', 4, 5, 4, 30293),
        (2, 'Heineken 0.0', 'brezalkoholno', 'svetlo', 2, 3, 4, 38293),
        (4, 'Staropramen', 'alkoholno', 'svetlo', 3, 4, 4, 63948),
        (5, 'Carlsberg', 'alkoholno', 'svetlo', 4, 4, 3, 42938),
        (6, 'Guinness', 'alkoholno', 'temno', 4, 3, 2, 18349),
        (3, 'Ipa pivo', 'alkoholno', 'ipa', 3, 4, 5, 51829),
        (3, 'Zlatorog temno', 'alkoholno', 'temno', 5, 3, 3, 58293),
        (1, 'Union', 'alkoholno', 'svetlo', 4, 4, 3, 89320),
        (1, 'Radler grenivka', 'alkoholno', 'radler', 2, 3, 3, 84410),
        (1, 'Smile', 'alkoholno', 'svetlo', 1, 3, 4, 82304),
        (3, 'Temni malt', 'brezalkoholno', 'malt', 1, 2, 4, 52938),
        (3, 'Pšenično pivo', 'alkoholno', 'pšenično', 3, 3, 3, 52039),
        (3, 'Golding', 'alkoholno', 'svetlo', 3, 5, 4, 56293),
        (3, 'Zlatorog 0.0', 'brezalkoholno', 'svetlo', 2, 3, 2, 59321),
        (6, 'Guinness', 'alkoholno', 'temno', 4, 3, 2, 18349),
        (3, 'Ipa pivo', 'alkoholno', 'ipa', 3, 4, 5, 51829),
        (3, 'Zlatorog temno', 'alkoholno', 'temno', 5, 3, 3, 58293),
        (1, 'Union', 'alkoholno', 'svetlo', 4, 4, 3, 89320),
        (1, 'Radler grenivka', 'alkoholno', 'radler', 2, 3, 3, 84417),
        (1, 'Smile', 'alkoholno', 'svetlo', 1, 3, 4, 82304),
        (3, 'Temni malt', 'brezalkoholno', 'malt', 1, 2, 4, 52938),
        (3, 'Pšenično pivo', 'alkoholno', 'pšenično', 3, 3, 3, 52039),
        (3, 'Golding', 'alkoholno', 'svetlo', 3, 5, 4, 56293),
        (3, 'Zlatorog 0.0', 'brezalkoholno', 'svetlo', 2, 3, 2, 59321),
        (5, 'Carlsberg 0.0', 'brezalkoholno', 'svetlo', 2, 4, 3, 41928),
        (5, 'Nordic Ale', 'brezalkoholno', 'svetlo', 3, 3, 2, 49283),
        (5, '1664 Bio Non Filtrée', 'alkoholno', 'nefiltrirano', 4, 3, 4, 41829),
        (5, '1664 Créations French Style IPA', 'alkoholno', 'ipa', 3, 4, 3, 43928),
        (5, 'Alivaria Beloe Zoloto', 'alkoholno', 'pšenično', 4, 3, 4, 43726),
        (5, 'Arsenalnoe Non-alcoholic', 'brezalkoholno', 'svetlo', 2, 2, 3, 48279),
        (4, 'Staropramen Dark', 'alkoholno', 'temno', 5, 3, 4, 69283),
        (4, 'Staropramen Premium', 'alkoholno', 'svetlo', 3, 5, 4, 63293),
        (4, 'Staropramen nefiltrirano', 'alkoholno', 'nefiltrirano', 4, 3, 4, 63534),
        (4, 'Staropramen brezalkoholno', 'brezalkoholno', 'svetlo', 2, 3, 3, 69382),
        (6, 'Guinness Draught', 'alkoholno', 'temno', 3, 4, 5, 19238),
        (6, 'Guinness Foreign Extra Scout', 'alkoholno', 'temno', 4, 3, 4, 17383),
        (6, 'Nitro IPA', 'alkoholno', 'ipa', 3, 4, 5, 19348),
        (6, 'Blond American Lager', 'alkoholno', 'svetlo', 3, 5, 4, 12946),
        (6, 'Hop House 13 Lager', 'alkoholno', 'svetlo', 4, 4, 3, 18364),
        (6, 'Golden Ale', 'alkoholno', 'svetlo', 3, 5, 4, 14832),
        (6, 'Dublin Porter', 'alkoholno', 'svetlo', 4, 3, 3, 13203),
        (2, 'Sodček Draught Kreg', 'alkoholno', 'svetlo', 3, 4, 5, 17826),
        (2, 'Extra Cold', 'alkoholno', 'svetlo', 3, 5, 5, 13495),
        (7, 'Rocket Queen', 'alkoholno', 'ipa', 4, 4, 3, 28447),
        (7, 'Fear and Loathing in Belgrade', 'alkoholno', 'ipa', 3, 3, 5, 29384),
        (7, 'Wolf Pack', 'alkoholno', 'svetlo', 4, 4, 2, 27493),
        (7, 'Best Buds', 'alkoholno', 'svetlo', 3, 3, 4, 29484),
        (7, 'Drargon Slayer', 'alkoholno', 'ipa', 3, 4, 5, 22837),
        (7, 'Emergency Landing', 'alkoholno', 'neipa', 4, 3, 5, 21928),
        (7, 'Povodni mož', 'alkoholno', 'ipa', 2, 5, 3, 28374),
        (7, 'Rocket Queen', 'alkoholno', 'ipa', 4, 4, 3, 28447),
        (7, 'Fear and Loathing in Belgrade', 'alkoholno', 'ipa', 3, 3, 5, 29384),
        (7, 'Wolf Pack', 'alkoholno', 'svetlo', 4, 4, 2, 27493),
        (7, 'Best Buds', 'alkoholno', 'svetlo', 3, 3, 4, 29484),
        (7, 'Drargon Slayer', 'alkoholno', 'ipa', 3, 4, 5, 22837),
        (7, 'Emergency Landing', 'alkoholno', 'neipa', 4, 3, 5, 21928),
        (7, 'Povodni mož', 'alkoholno', 'ipa', 2, 5, 3, 28374),
        (7, 'Cashmere', 'alkoholno', 'neipa', 3, 4, 2, 21239),
        (7, 'Sultans of Hops', 'alkoholno', 'ipa', 4, 3, 5, 23948),
        (7, 'Forbidden fruit', 'alkoholno', 'svetlo', 3, 4, 4, 29398),
        (7, 'Komb4jn', 'alkoholno', 'svetlo', 3, 3, 4, 27368),
        (7, 'Papagena', 'alkoholno', 'ipa', 5, 2, 3, 28347),
        (7, 'Oli Warz', 'alkoholno', 'temno', 5, 3, 3, 26384),
        (7, 'Franci', 'alkoholno', 'svetlo', 4, 4, 3, 28464);

INSERT INTO ocena (tk_pivo, tk_uporabnik, vrednost)
VALUES  (2, 4, 1),
        (1, 3, 2),
        (10, 5, 4),
        (21, 2, 5),
        (4, 1, 3),
        (7, 10, 4),
        (15, 6, 2),
        (6, 7, 4),
        (14, 9, 3),
        (22, 8, 5),
        (19, 2, 2),
        (3, 5, 5),
        (36, 10, 5),
        (24, 3, 3),
        (46, 7, 4),
        (30, 1, 2),
        (5, 9, 3),
        (20, 4, 5),
        (41, 6, 3),
        (42, 8, 3),
        (8, 3, 1),
        (16, 2, 5),
        (37, 6, 1),
        (33, 4, 2),
        (27, 9, 4),
        (9, 10, 3);

INSERT INTO priljubljeno_pivo (tk_pivo, tk_seznam_piva)
VALUES  (2, 1),
        (34, 1),
        (21, 1),
        (44, 2),
        (16, 2),
        (5, 2),
        (33, 3),
        (10, 3),
        (27, 3),
        (48, 8),
        (3, 2),
        (25, 6),
        (30, 4),
        (9, 3),
        (11, 10),
        (25, 7),
        (41, 5),
        (6, 8),
        (38, 2),
        (24, 4),
        (17, 9),
        (4, 1),
        (27, 5),
        (1, 3),
        (49, 7),
        (36, 8),
        (20, 10),
        (10, 5),
        (17, 2),
        (29, 3),
        (10, 4),
        (38, 1),
        (27, 6),
        (1, 3);