const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurgerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuBurgerIcon.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive"); //classList.toggle("inactive"); - Quita o pone la clase inactive dependiendo si latiene o no.
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive"); //classList.toggle("inactive"); - Quita o pone la clase inactive dependiendo si latiene o no.
}
