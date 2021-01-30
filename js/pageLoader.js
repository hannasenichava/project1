const navbarDiv = document.getElementById("navMenu");
const hamburguerDiv = document.getElementById("selects");
const newNav = document.getElementById("newNav");
const divInsideSelects = document.getElementById("divInsideSelects");
const countryName = document.getElementsByClassName("nameCountry");
const countryImage = document.getElementsByClassName("countryPicture");
const drinkName = document.getElementsByClassName("title");
const drinkPic = document.getElementsByClassName("drinkPic");
const recipeItems = document.getElementsByClassName("ingredients");
const recipeDirections = document.getElementsByClassName("directions");
const ptFlag = document.getElementsByClassName("portPic");
const bzFlag = document.getElementsByClassName("brasPic");
const indexPT = document.getElementsByClassName("drink1");
const indexBZ = document.getElementById("Brazil");

let portugal = {
    name: 'Portugal',
    drink: 'Portuguese Sangria',
    recipe: ['Wine (1Lt.)', 'Raspberries (250gr)', 'Cinamon', 'Ice'],
    direction: ['Mix the raspberries with the cinamon', 'Merge the misture with the wine and shake it', 'Add the ice right before it goes to be consumed', 'Enjoy!'],
    iconicViewPath: "/images/lisboa.jpg",
    flagPath: "url(/images/pt_basic.jpg)",
    drinkPicPath: "/images/sangria.jpg",
    flagSelector: "portPic"
}

let brazil = {
    name: 'Brazil',
    drink: 'Caipirinha',
    recipe: ['Cachaça (0,5Lt.)', '10 Limes', 'Brown Sugar (250gr)', 'Ice (1kg)', 'Cinamon (as much you wish)'],
    direction: ['Cut the limes in 4 parts', 'Remove inner white part from limes', 'Use a Grinder to squeze the limons into the jarr', 'Put the limes together with the juice', 'Add the sugar and mix it', 'Add the ice', 'Add the Cachaça and cinamon', 'Enjoy'],
    iconicViewPath: "/images/RioDeJaneiro.jpg",
    flagPath: "url(/images/brasil_basic.png)",
    drinkPicPath: "/images/caipirinha.png",
    flagSelector: "brasPic"
}

let cuba = {
    name: 'Cuba',
    drink: 'Mojito',
    recipe: ['3 mint leaves', '1/2 ounces simple syrup', '2 ounces white rum', '3/4 ounces lime juice', 'Club soda', 'Garnish: mint sprig', 'Garnish: lime wheel'],
    direction: ['Lightly muddle the mint with the simple syrup in a shaker', 'Add the rum, lime juice and ice, and give it a brief shake', 'Strain into a highball glass over fresh ice', 'Top with the club soda', 'Garnish with a mint sprig and lime wheel']
}

let countries = [portugal, brazil];

const hamburguerMenu = document.getElementsByClassName("hamburguerMenu");
let listItemsNav = [];
//const hamburguerMenu = document.getElementById("hamburguerMenu");

console.log(hamburguerMenu);
console.log(document.getElementsByClassName("hamburguerDiv"));
let count = 1;

function flagFunction(arrayPosition) {
    console.log("Brazil!!");
    countries.forEach(country => document.getElementsByClassName(country.flagSelector)[0].style.border = "0px solid transparent")
    document.getElementsByClassName(countries[arrayPosition].flagSelector)[0].style.border = "3px solid red";
    countryImage[0].src = countries[arrayPosition].iconicViewPath;
    countryName[0].style.backgroundImage = countries[arrayPosition].flagPath;
    countryName[0].getElementsByTagName("h1")[0].innerHTML = countries[arrayPosition].name;
    drinkPic[0].src = countries[arrayPosition].drinkPicPath;
    drinkName[0].getElementsByTagName("h1")[0].innerHTML = countries[arrayPosition].drink;
    recipeItems[0].getElementsByTagName("ul")[0].innerText = '';
    recipeDirections[0].getElementsByTagName("ol")[0].innerText = '';
    countries[arrayPosition].recipe.forEach(ingredient => {
        recipeItems[0].getElementsByTagName("ul")[0].appendChild(document.createElement('li')).innerText = ingredient;
    });
    countries[arrayPosition].direction.forEach(instruction => {
        recipeDirections[0].getElementsByTagName('ol')[0].appendChild(document.createElement('li')).innerText = instruction;
    })
}

hamburguerMenu[0].addEventListener('click', () => {
    count = count + 1;
    console.log("here!12");
    if (count % 2 === 0) {
        hamburguerDiv.style.display = "flex";
        hamburguerDiv.style.justifyContent = "center";
        listItemsNav = newNav.getElementsByTagName("li");
        console.log(listItemsNav);
    } else {
        hamburguerDiv.style.display = "none";
    }

    newNav.style.background = "#ffffff";

});

indexPT[0].addEventListener('click', () => {
    window.location.href = "country1.html"
})