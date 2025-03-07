const menus = [];
const dinners = [];

/** réalisation issus github */
const starter = [
  "Velouté de potimarron coco",
  "Crémeux de patate douce à la carotte sur toast grillé",
  "Concombre façon tzatziki",
  "Croque de chou fleur sauce ciboulette",
  "Pamplemousse rose",
  "Rillettes de sardine à la tomate et fromage blanc",
  "Haricots verts vinaigrette échalotte",
  "Carottes râpées, ciboulette et graines de courge",
  "Asperges blanches vinaigrette à l'ancienne",
  "Chou rouge aux pommes, emmental et aux noix",
  "Salade verte aux graines de tournesol",
  "Brocolis rôtis",
  "Oeufs mimosa",
  "Courgette râpée aux olive et féta",
];
const maindishes = [
  "Tomate farcie au boeuf et riz basmati",
  "Risotto de sarrasin au champignons et parmesan",
  "Sauté de boeuf au paprika et ratatouille",
  "Tortilla de pomme de terre et cantal",
  "Aiguillettes de poulet sauce moutarde et pomme de terre sautée aux herbes",
  "Frittata de poivrons et pasta au basilic ",
  "Dos de cabillaud à l'orange et épinards à la béchamel",
  "Poulet au curry et quinoa rouge aux amandes",
  "Dos de lieu au poireau et noisettes grillées et riz pilaf",
  "Tajine de dinde aux dattes et abricots, navets braisés et semoule",
  "Tagliatelles au gorgonzola, carotte et artichaut grillés",
  "Dahl de lentilles corail et riz",
  "Lasagnes bolognaises",
  "Quiche Lorraine",
];
const dessert = [
  "Tomme de Savoie et Salade d'orange",
  "Abricots",
  "Moelleux au chocolat noir",
  "Salade de fraise à la menthe",
  "Nectarine au sirop de verveine",
  "Yaourt nature et tarte à la rhubarbe",
  "Tartare de kiwi et mangue",
  "Clémentines",
  "Purée de pomme banane",
  "Bûche de chèvre et Pomme",
  "Salade d'ananas",
  "Pomme au four à la cannelle",
  "Fromage blanc au coulis de framboise",
  "Camembert, Poire au chocolat noir",
];

const getRandomItem = (array) => {
  if (array.length === 0) return null; // Vérifie si la liste est vide
  const index = Math.floor(Math.random() * array.length);
  return array.splice(index, 1)[0]; // Retire l'élément sélectionné et le retourne
};

const weekDiv = document.querySelector(".week");

const generateAllmenus = () => {
  weekDiv.innerHTML = ``;

  // Création de copies pour éviter de modifier les listes d'origine
  let availableStarters = [...starter];
  let availableMaindishes = [...maindishes];
  let availableDesserts = [...dessert];

  for (let day = 1; day < 8; day++) {
    // Réinitialisation si nécessaire
    if (availableStarters.length === 0) availableStarters = [...starter];
    if (availableMaindishes.length === 0) availableMaindishes = [...maindishes];
    if (availableDesserts.length === 0) availableDesserts = [...dessert];

    const menu = {
      starter: getRandomItem(availableStarters),
      maindish: getRandomItem(availableMaindishes),
      dessert: getRandomItem(availableDesserts),
    };

    const dinner = {
      starter: getRandomItem(availableStarters),
      maindish: getRandomItem(availableMaindishes),
      dessert: getRandomItem(availableDesserts),
    };

    weekDiv.innerHTML += `<div class="day">
                    <h2>Jour ${day}</h2>
                    <div class="menus">
                        <h3>Déjeuner</h3>
                        <h4>Entrée</h4>
                        <div>${menu.starter}</div>
                        <h4>Plat</h4>
                        <div>${menu.maindish}</div>
                        <h4>Dessert</h4>
                        <div>${menu.dessert}</div>
                    </div>
                     <div class="dinners">
                        <h3>Dîner</h3>
                        <h4>Entrée</h4>
                        <div>${dinner.starter}</div>
                        <h4>Plat</h4>
                        <div>${dinner.maindish}</div>
                        <h4>Dessert</H4>
                        <div>${dinner.dessert}</div>
                </div>
                </div>`;
  }
};

const generatebutton = document.querySelector("#generate");

generatebutton.onclick = generateAllmenus;

generateAllmenus();
