CREATE TABLE STARTERS (
id INT AUTO_INCREMENT PRIMARY KEY,
name TEXT NOT NULL,
type TEXT NOT NULL, 
season TEXT NOT NULL, 
diet TEXT NOT NULL
);

CREATE TABLE MAINDISHES (
id INT AUTO_INCREMENT PRIMARY KEY,
name TEXT NOT NULL,
type TEXT NOT NULL, 
season TEXT NOT NULL, 
diet TEXT NOT NULL
);

CREATE TABLE DESSERTS (
id INT AUTO_INCREMENT PRIMARY KEY,
name TEXT NOT NULL,
type TEXT NOT NULL, 
season TEXT NOT NULL, 
diet TEXT NOT NULL
);


INSERT INTO STARTERS (name, type, season, diet) VALUES 
('Velouté de potimarron coco','vegetable','autumn/winter','all'),
('Crémeux de patate douce à la carotte sur toast grillé','vegetable','autumn/winter','all'), 
('Concombre façon tzatziki', 'vegetable','spring/summer', 'all'),
('Croque de chou fleur sauce ciboulette','vegetable','autumne/winter','all'),
('Pamplemousse rose','vegetable','autumne/winter','all'),
('Rillettes de sardine à la tomate et fromage blanc','protein','spring/summer','meat'),
('Haricots verts vinaigrette échalotte','vegetable','autumne/winter','all'), 
('Carottes râpées, ciboulette et graines de courge','vegetable','autumn/winter','all'),
("Asperges blanches vinaigrette à l'ancienne",'vegetable','spring/summer', 'all')
('Chou rouge aux pommes, emmental et aux noix','vegetable','autumn/winter','all'),
('Salade verte aux graines de tournesol','vegetable','spring/summer', 'all'),
('Brocolis rôtis','vegetable','spring/summer', 'all'),
('Oeufs mimosa','protein','spring/summer', 'all'), 
('Courgette râpée aux olive et féta', 'vegetable','spring/summer', 'all');