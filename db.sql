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
season TEXT NOT NULL, 
diet TEXT NOT NULL
);

CREATE TABLE DESSERTS (
id INT AUTO_INCREMENT PRIMARY KEY,
name TEXT NOT NULL,
type TEXT NOT NULL, 
season TEXT NOT NULL, 
);

INSERT INTO STARTERS (name, type, season, diet) VALUES 
('Velouté de potimarron coco','vegetable','autumn/winter','all'),
('Crémeux de patate douce à la carotte sur toast grillé','vegetable','autumn/winter','all'), 
('Concombre façon tzatziki', 'vegetable','spring/summer', 'all'),
('Croque de chou fleur sauce ciboulette','vegetable','autumne/winter','all'),
('Pamplemousse rose','vegetable','autumne/winter','all'),
('Rillettes de sardine à la tomate et fromage blanc','protein','spring/summer','fish'),
('Haricots verts vinaigrette échalotte','vegetable','autumne/winter','all'), 
('Carottes râpées, ciboulette et graines de courge','vegetable','autumn/winter','all'),
("Asperges blanches vinaigrette à l'ancienne",'vegetable','spring/summer', 'all')
('Chou rouge aux pommes, emmental et aux noix','vegetable','autumn/winter','all'),
('Salade verte aux graines de tournesol','vegetable','spring/summer', 'all'),
('Brocolis rôtis','vegetable','spring/summer', 'all'),
('Oeufs mimosa','protein','spring/summer', 'all'), 
('Courgette râpée aux olive et féta', 'vegetable','spring/summer', 'all');

INSERT INTO MAINDISHES (name, season, diet) VALUES 
('Tomate farcie au boeuf et riz basmati','spring/summer','meat')
('Risotto de sarrasin au champignons et parmesan','autumn/winter','all')
('Sauté de boeuf au paprika, pdt et ratatouille','spring/summer', 'meat')
('Tortilla de pomme de terre et cantal','autumn/winter','all')
('Aiguillettes de poulet sauce moutarde et pomme de terre sautée aux herbes','spring/summer','meat'),
('Frittata de poivrons et pasta au basilic','spring/summer','all')
("Dos de cabillaud à l'orange et épinards à la béchamel",'autumn/winter','fish'),
('Poulet au curry, tomate à la provençale et quinoa rouge aux amandes','spring/summer','meat'),
('Dos de lieu au poireau et noisettes grillées et riz pilaf','autumn/winter','fish'),
('Tajine de dinde aux dattes et abricots, navets braisés et semoule','autumn/winter','meat'),
('Tagliatelles au gorgonzola, carotte et artichaut grillés','spring/summer','all'), 
('Dahl de lentilles corail, aubergine rôtie et riz','spring/summer','all'), 
('Lasagnes bolognaises et salade verte','spring/summer','meat'),
('Quiche Lorraine et salade verte', 'autumn/winter','meat'); 

INSERT INTO DESSERTS (name, type, season) VALUES 
("Tomme de Savoie et Salade d'orange", 'cheese and fruit', 'autumn/winter'), 
('Abricots','fruit', 'spring/summer'),
('Moelleux au chocolat noir', 'pastry', 'all'),
('Salade de fraise à la menthe','fruit','spring/summer'),
('Nectarine au sirop de verveine','fruit','spring/summer'),
('Yaourt nature et tarte à la rhubarbe','yogurt and pastry','spring/summer'),
('Tartare de kiwi et mangue', 'fruit', 'spring/summer'),
('Clémentines','fruit','autumn/winter'),
('Purée de pomme banane', 'fruit', 'autumn/winter'),
("Bûche de chèvre et Pomme", 'cheese and fruit', 'autumn/winter'),
("Salade d'ananas", 'fruit', 'autumn/winter'),
('Pomme au four à la cannelle','fruit', 'autumn/winter'),
('Fromage blanc au coulis de framboise','yogurt','spring/summer'),
('Camembert,Poire au chocolat noir', 'cheese and fruit', 'autumn/winter');
