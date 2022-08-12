const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurgerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCartIcon = document.querySelector(".navbar-shopping-cart");
const asideProductDetail = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuBurgerIcon.addEventListener("click", toggleMobileMenu);
menuCartIcon.addEventListener("click", toggleAsideProductDetail);

function toggleDesktopMenu() {
  isAsideProductDetailClosed =
    asideProductDetail.classList.contains("inactive");

  if (!isAsideProductDetailClosed) {
    asideProductDetail.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive"); //classList.toggle("inactive"); - Quita o pone la clase inactive dependiendo si latiene o no.
}

function toggleMobileMenu() {
  const isAsideProductDetailClosed =
    asideProductDetail.classList.contains("inactive");
  if (!isAsideProductDetailClosed) {
    asideProductDetail.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive"); //classList.toggle("inactive"); - Quita o pone la clase inactive dependiendo si latiene o no.
}

function toggleAsideProductDetail() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  asideProductDetail.classList.toggle("inactive");
}
