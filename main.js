const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurgerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCartIcon = document.querySelector(".navbar-shopping-cart");
const asideProductDetail = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

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

const productList = []; //Array que nos devolveria JS cuando hicieramos la consulta en la BD

productList.push({
  name: "Bike",
  price: 12700,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Consola Retro",
  price: 1200,
  image: "https://m.media-amazon.com/images/I/51guaRVTy7L._AC_SX425_.jpg",
});
productList.push({
  name: "Iphone 11",
  price: 1600,
  image: "https://m.media-amazon.com/images/I/71i2XhHU3pL._AC_SX679_.jpg",
});
productList.push({
  name: "Apple Ipad",
  price: 1500,
  image: "https://m.media-amazon.com/images/I/61zdQQORNML._AC_SX679_.jpg",
});
productList.push({
  name: "Kindle Paperwhite (8 GB)",
  price: 300,
  image: "https://m.media-amazon.com/images/I/71Unv1b-duL._AC_SX679_.jpg",
});
productList.push({
  name: "Tennis Montain Bike",
  price: 2200,
  image:
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg",
});
productList.push({
  name: "Perchero Colgador",
  price: 800,
  image: "https://m.media-amazon.com/images/I/616hOdQKt3L._AC_SY550_.jpg",
});
productList.push({
  name: "Echo Dot (4.ª generación)",
  price: 600,
  image: "https://m.media-amazon.com/images/I/71Q9d6N7xkL._AC_SX569_.jpg",
});
productList.push({
  name: "Mini Arcade",
  price: 876,
  image: "https://m.media-amazon.com/images/I/71BGQ3qU7nS._AC_SX425_.jpg",
});

/* 
<div class="product-card">
<img
  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  alt=""
  class="product-img"
/>
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Content Marketing</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="" />
  </figure>
</div>
</div> 
*/

function renderProducts(arrayProducts) {
  for (product of arrayProducts) {
    const productCard = document.createElement("div"); //Creamos un div
    productCard.classList.add("product-card"); //Le agregamos la clase correspondiente

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    //product = {name, price, image} product.image
    productImg.classList.add("product-img");

    const productInfo = document.createElement("div"); //Creamos un div
    productInfo.classList.add("product-info"); //Le agregamos la clase correspondiente

    const productInfoDiv = document.createElement("div"); //Creamos un div
    const productPrice = document.createElement("p"); //Creamos una etiqueta p
    productPrice.innerText = "$" + product.price; //traemos la informacion contenida en nuestro array
    const productName = document.createElement("p"); //Creamos una etiqueta p
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement("figure"); //Creamos un figure
    const productInfoImgCart = document.createElement("img"); //Creamos un img
    productInfoImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productInfoImgCart);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(productImg, productInfo);

    cardsContainer.append(productCard);
  }
}

renderProducts(productList);
