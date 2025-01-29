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
        starter: 'Oeufs mimosa',
        maindish: 'Tagliatelles au gorgonzola, carotte et artichaut grillés',
        dessert: "Salade d'ananas",
    },
    {
        starter: 'Oeufs mimosa',
        maindish: 'Tagliatelles au gorgonzola, carotte et artichaut grillés',
        dessert: "Salade d'ananas",
    }, 
    {
        starter: 'Oeufs mimosa',
        maindish: 'Tagliatelles au gorgonzola, carotte et artichaut grillés',
        dessert: "Salade d'ananas",
    }
];

const dinners = [
    {
        starter: 'Velouté de potimarron coco',
        maindish: 'Totilla de pomme de terre et cantal',
        dessert: 'Tartare de kiwi et mangue',
    }
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


