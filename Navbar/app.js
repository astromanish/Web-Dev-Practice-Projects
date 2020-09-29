const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const navItem = document.querySelectorAll(".nav-items");

hamburger.addEventListener("click" , () => {
    navList.classList.toggle("open");
});