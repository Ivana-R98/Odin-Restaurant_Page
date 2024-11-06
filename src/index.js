import { openMainPage } from "./mainPg";
import { openMenuPage } from "./menuPg";
import { openAboutPage } from "./aboutPg";
import "./styles.css";

openMainPage();

const mainBtn = document.getElementById("main");
mainBtn.addEventListener("click", () => { 
    removePreviousPage();
    openMainPage();
});
const menuBtn = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
    removePreviousPage();
    openMenuPage();
})
const aboutBtn = document.getElementById("about");
aboutBtn.addEventListener("click", () => {
    removePreviousPage();
    openAboutPage();
});

function removePreviousPage() {
    const div = document.getElementById("content");
    div.innerHTML = "";
}