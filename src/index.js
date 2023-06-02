const menu = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-right");
const header = document.querySelector(".header");
const closeIcon = document.querySelector(".fa-x");
const openIcon = document.querySelector(".fa-bars");
let isOpen = navLinks.style.display === "flex";

menu.addEventListener("click", () => {
  if (!isOpen) {
    navLinks.style.display = "flex";
    navLinks.style.height = "unset";
    closeIcon.style.display = "flex";
    openIcon.style.display = "none";
    isOpen = !isOpen;
  } else {
    navLinks.style.display = "none";
    header.style.alignItems = "center";
    closeIcon.style.display = "none";
    openIcon.style.display = "flex";
    isOpen = !isOpen;
  }
});

// window.addEventListener("");
