// DROPDOWN MENU
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
    const select = document.querySelector(".select");
    const menu = document.querySelector(".menu");
    select.addEventListener("click", () => {
    menu.classList.toggle("menu-open");
    });
});