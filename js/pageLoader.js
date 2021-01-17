const navbarDiv = document.getElementById("navMenu");
const hamburguerDiv = document.getElementById("selects");
const newNav = document.getElementById("newNav");
const divInsideSelects = document.getElementById("divInsideSelects");

const hamburguerMenu = document.getElementsByClassName("hamburguerMenu");
let listItemsNav = [];
//const hamburguerMenu = document.getElementById("hamburguerMenu");

console.log(hamburguerMenu);
let count = 1;

hamburguerMenu[0].addEventListener('click', () => {
    count = count+1;
    console.log("here!12");
    if(count%2 === 0){
        hamburguerDiv.style.display = "flex";
        hamburguerDiv.style.justifyContent = "center";
        listItemsNav = newNav.getElementsByTagName("li");
        console.log(listItemsNav);
    } else {
        hamburguerDiv.style.display = "none";
    }
    
    newNav.style.background = "#ffffff";

});