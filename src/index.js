import { navigation } from "./navigation";
import { homepage } from "./home";
import { menuPage } from "./menu";
import { contactpage } from "./contact";

const menu = document.querySelector("#menupage")
const home = document.querySelector("#homepage")
const contact = document.querySelector('#contactpage')

const homebtn = document.querySelector('#home')
const menubtn = document.querySelector('#menu')
const contactbtn = document.querySelector('#contact')

const btnToMenu = document.querySelector('.home-button')


homebtn.addEventListener("click", () => {
    menu.classList.remove('active')
    contact.classList.remove('active')
    home.classList.add('active')
})

menubtn.addEventListener("click", () => {
    home.classList.remove('active')
    contact.classList.remove('active')
    menu.classList.add('active')
})

btnToMenu.addEventListener("click", () => {
    home.classList.remove('active')
    contact.classList.remove('active')
    menu.classList.add('active')
})

contactbtn.addEventListener('click', () => {
    home.classList.remove('active')
    menu.classList.remove('active')
    contact.classList.add('active')
})