const menus = [
    {
        starter: 'Carottes râpées, ciboulette et graines de courge',
        maindish: 'Poulet au curry et quinoa rouge aux amandes',
        dessert: 'Camembert, Poire au chocolat noir',
    },
    {
        starter: "Asperges blanches vinaigrette à l'ancienne",
        maindish: 'Dos de lieu au poireau et noisettes grillées et riz pilaf',
        dessert: 'Fromage blanc au coulis de framboise',
    },
    {
        starter: 'Courgette râpée aux olive et féta',
        maindish: 'Tajine de dinde aux dattes et abricots, navets braisés et semoule',
        dessert: 'Pomme au four à la cannelle',
    },
    {
        starter: 'Oeufs mimosa',
        maindish: 'Tagliatelles au gorgonzola, carotte et artichaut grillés',
        dessert: "Salade d'ananas",
    },
    {
        starter: 'Brocolis rôtis',
        maindish: 'Dahl de lentilles corail et riz',
        dessert: "Bûche de chèvre et Pomme",
    },
    {
        starter: 'Salade verte aux graines de tournesol',
        maindish: 'Lasagne bolognaise',
        dessert: 'Purée de pomme banane',
    }, 
    {
        starter: 'Chou rouge aux pommes, emmental et aux noix',
        maindish: 'Quiche Lorraine',
        dessert: 'Clémentines',
    }
];

const dinners = [
    {
        starter: 'Velouté de potimarron coco',
        maindish: 'Tortilla de pomme de terre et cantal',
        dessert: 'Tartare de kiwi et mangue',
    },
    {
        starter: 'Crémeux de patate douce à la carotte sur toast grillé',
        maindish: 'Sauté de boeuf au paprika et ratatouille',
        dessert: 'Yaourt nature et tarte à la rhubarbe',  
    },
    {
        starter: 'Concombre façon tzatziki',
        maindish: 'Risotto de sarrasin au champignons et parmesan',
        dessert: 'Nectarine au sirop de verveine',  
    },
    {
        starter: 'Croque de chou fleur sauce ciboulette',
        maindish: 'Tomate farcie au boeuf et riz basmati',
        dessert: 'Salade de fraise à la menthe',  
    },
    {
        starter: 'Pamplemousse rose',
        maindish: "Dos de cabillaud à l'orange et épinards à la béchamel",
        dessert: 'Moelleux au chocolat noir',  
    },
    {
        starter: 'Rillettes de sardine à la tomate et fromage blanc',
        maindish: "Frittata de poivrons et pasta au basilic ",
        dessert: "Abricots",  
    },
    {
        starter: 'Haricots verts vinaigrette échalotte',
        maindish: 'Aiguillettes de poulet sauce moutarde et pomme de terre sautée aux herbes',
        dessert: "Tomme de Savoie et Salade d'orange",  
    },
];

const weekDiv = document.querySelector('.week')

let day = 1; 

for (const menu of menus) {
    weekDiv.innerHTML +=
        `<div class="day">
                    <h2>Jour ${day++}</h2>
                    <div class="menus">
                        <h3>Déjeuner</h3>
                        <h4>Entrée</h4>
                        <div>${menu.starter}</div>
                        <h4>Plat</h4>
                        <div>${menu.maindish}</div>
                        <h4>Dessert</h4>
                        <div>${menu.dessert}</div>
                    </div>`;
}
for (const dinner of dinners) {
    weekDiv.innerHTML +=
                   ` <div class="dinners">
                        <h3>Dîner</h3>
                        <h4>Entrée</h4>
                        <div>${dinner.starter}</div>
                        <h4>Plat</h4>
                        <div>${dinner.maindish}</div>
                        <h4>Dessert</H4>
                        <div>${dinner.dessert}</div>
                </div>`;
}
/** réalisation issus github */
const starter = ['Velouté de potimarron coco','Crémeux de patate douce à la carotte sur toast grillé','Concombre façon tzatziki','Croque de chou fleur sauce ciboulette','Pamplemousse rose','Rillettes de sardine à la tomate et fromage blanc','Haricots verts vinaigrette échalotte','Carottes râpées, ciboulette et graines de courge',"Asperges blanches vinaigrette à l'ancienne",'Chou rouge aux pommes, emmental et aux noix','Salade verte aux graines de tournesol','Brocolis rôtis','Oeufs mimosa','Courgette râpée aux olive et féta']; 
const maindish =['Tomate farcie au boeuf et riz basmati','Risotto de sarrasin au champignons et parmesan','Sauté de boeuf au paprika et ratatouille','Tortilla de pomme de terre et cantal','Aiguillettes de poulet sauce moutarde et pomme de terre sautée aux herbes',"Frittata de poivrons et pasta au basilic ","Dos de cabillaud à l'orange et épinards à la béchamel",'Poulet au curry et quinoa rouge aux amandes','Dos de lieu au poireau et noisettes grillées et riz pilaf','Tajine de dinde aux dattes et abricots, navets braisés et semoule','Tagliatelles au gorgonzola, carotte et artichaut grillés','Dahl de lentilles corail et riz','Lasagnes bolognaises','Quiche Lorraine',]
const dessert = ["Tomme de Savoie et Salade d'orange","Abricots",'Moelleux au chocolat noir','Salade de fraise à la menthe','Nectarine au sirop de verveine','Yaourt nature et tarte à la rhubarbe','Tartare de kiwi et mangue','Clémentines','Purée de pomme banane',"Bûche de chèvre et Pomme","Salade d'ananas",'Pomme au four à la cannelle','Fromage blanc au coulis de framboise','Camembert, Poire au chocolat noir',]

const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

const generateAllMenus = () => {
    return {
        entrée: getRandomItem(starter),
        plat: getRandomItem(maindish),
        dessert: getRandomItem(dessert)
    };
};

