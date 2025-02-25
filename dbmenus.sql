DROP table if exists DISHES;

CREATE TABLE DISHES (
id INT AUTO_INCREMENT PRIMARY KEY,
name TEXT NOT NULL,
type TEXT NOT NULL,
foodcategory TEXT NOT NULL, 
season TEXT NOT NULL, 
diet TEXT NOT NULL
);

INSERT INTO DISHES (name, type, foodcategory, season, diet) VALUES 
('Velouté de potimarron coco','starter','vegetable','autumn/winter','all'),
('Crémeux de patate douce à la carotte sur toast grillé','starter','vegetable','autumn/winter','all'),
('Concombre façon tzatziki', 'starter','vegetable','spring/summer', 'all'),
('Croque de chou fleur sauce ciboulette','starter','vegetable','autumne/winter','all'),
('Pamplemousse rose','vegetable','starter','autumne/winter','all'),
('Rillettes de sardine à la tomate et fromage blanc','starter','protein','spring/summer','fish'),
('Haricots verts vinaigrette échalotte','starter','vegetable','autumne/winter','all'), 
('Carottes râpées, ciboulette et graines de courge','starter','vegetable','autumn/winter','all'),
("Asperges blanches vinaigrette à l'ancienne",'starter','vegetable','spring/summer', 'all'),
('Chou rouge aux pommes, emmental et aux noix','starter','vegetable','autumn/winter','all'),
('Salade verte aux graines de tournesol','starter','vegetable','spring/summer', 'all'),
('Brocolis rôtis','starter','vegetable','spring/summer', 'all'),
('Oeufs mimosa','starter','protein','spring/summer', 'all'), 
('Courgette râpée aux olives et féta','starter','vegetable','spring/summer', 'all');

-- ('Tomate farcie au boeuf et riz basmati','maindish','spring/summer','meat')
-- ('Risotto de sarrasin aux champignons et parmesan','maindish','autumn/winter','all')
-- ('Sauté de boeuf au paprika, pdt et ratatouille','maindish','spring/summer', 'meat')
-- ('Tortilla de pommes de terre et Cantal','maindish','autumn/winter','all')
-- ('Aiguillettes de poulet sauce moutarde et pommes de terre sautée aux herbes','maindish','spring/summer','meat'),
-- ('Frittata de poivrons et pasta au basilic','maindish','spring/summer','all')
-- ("Dos de cabillaud à l'orange et épinards à la béchamel",'maindish','autumn/winter','fish'),
-- ('Poulet au curry, tomate à la provençale et quinoa rouge aux amandes','maindish','spring/summer','meat'),
-- ('Dos de lieu au poireau et noisettes grillées et riz pilaf','maindish','autumn/winter','fish'),
-- ('Tajine de dinde aux dattes et abricots, navets braisés et semoule','maindish','autumn/winter','meat'),
-- ('Tagliatelles au gorgonzola, carotte et artichaut grillés','maindish','spring/summer','all'), 
-- ('Dahl de lentilles corail, aubergine rôtie et riz','maindish','spring/summer','all'), 
-- ('Lasagnes bolognaises et salade verte','maindish','spring/summer','meat'),
-- ('Quiche Lorraine et salade verte','maindish','autumn/winter','meat'); 
-- ("Tomme de Savoie et Salade d'orange",'dessert','cheese and fruit', 'autumn/winter'), 
-- ('Abricots','dessert','fruit', 'spring/summer'),
-- ('Moelleux au chocolat noir','dessert', 'pastry', 'all'),
-- ('Salade de fraise à la menthe','dessert','fruit','spring/summer'),
-- ('Nectarine au sirop de verveine','dessert','fruit','spring/summer'),
-- ('Yaourt nature et tarte à la rhubarbe','dessert','yogurt and pastry','spring/summer'),
-- ('Tartare de kiwi et mangue','dessert', 'fruit', 'spring/summer'),
-- ('Clémentines','dessert','fruit','autumn/winter'),
-- ('Purée de pomme banane', 'dessert','fruit', 'autumn/winter'),
-- ("Bûche de chèvre et Pomme",'dessert', 'cheese and fruit', 'autumn/winter'),
-- ("Salade d'ananas", 'fruit','dessert', 'autumn/winter'),
-- ('Pomme au four à la cannelle','dessert','fruit', 'autumn/winter'),
-- ('Fromage blanc au coulis de framboise','dessert','yogurt','spring/summer'),
-- ('Camembert,Poire au chocolat noir','dessert', 'cheese and fruit', 'autumn/winter');
