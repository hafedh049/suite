const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 0);
  /*
  "toggles" token, removing it if it's present and adding it if it's not present.
  sticky is just a name to use it later for styles
  */
});

function loadProducts() {
  const products = document.getElementById("products");
  for (let index = 1; index <= 8; index += 1) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");

    const image = document.createElement("img");
    image.setAttribute("src", "images/" + index + ".jpg");

    const productText = document.createElement("div");
    productText.setAttribute("class", "product-text");
    productTextH5 = document.createElement("h5");
    productTextH5.innerHTML = "Sale";
    productText.appendChild(productTextH5);

    const heartIcon = document.createElement("div");
    heartIcon.setAttribute("class", "heart-icon");
    heart = document.createElement("i");
    heart.setAttribute("class", "bx bxs-heart-circle");
    heartIcon.appendChild(heart);

    const rating = document.createElement("div");
    rating.setAttribute("class", "rating");
    for (let ind = 0; ind < 5; ind += 1) {
      const star = document.createElement("i");
      star.setAttribute("class", ind != 4 ? "bx bxs-star" : "bx bxs-star-half");
      rating.appendChild(star);
    }

    const price = document.createElement("div");
    heartIcon.setAttribute("class", "price");

    const productName = document.createElement("h4");
    productName.innerHTML = "Half Running Set";

    const productPrice = document.createElement("p");
    productPrice.innerHTML = "$99 - $129";

    price.appendChild(productName);
    price.appendChild(productPrice);

    row.appendChild(image);
    row.appendChild(productText);
    row.appendChild(heartIcon);
    row.appendChild(rating);
    row.appendChild(price);

    products.appendChild(row);
  }
}
