//active header sticky

const header = document.querySelector("header");

window.addEventListener("scroll", ()=>{

header.classList.toggle("sticky",window.scrollY > 50)

})

//active scroll menu

const lilink = document.querySelectorAll("header ul li a");

const section = document.querySelectorAll("section");

function activeMenu(){

let secLength = section.length;

while(--secLength && window.screen + 500 < section [secLength].offsetTop){}

lilink.forEach(sec => sec.classList.remove("active"));

liLink [secLength].classList.add("active");

}

activeMenu();

window.addEventListener("scroll", activeMenu);
//active menu icon
const menuIcon =document.querySelector("#menu-icon");
const navlist =document.querySelector(".navalist");

menuIcon.onclick =() =>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open")
}