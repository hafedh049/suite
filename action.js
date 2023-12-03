const products = document.getElementById("products");
for (let index = 0; index < 6; index += 1) {
  const row = document.createElement("div");
  row.setAttribute("class", "row");

  const image = document.createElement("img");
  image.setAttribute("src", "images/$(index).jpg");

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
    star.setAttribute(ind != 4 ? "bx bxs-star" : "bx bxs-star-half");
    rating.appendChild(star);
  }

  const price = document.createElement("div");
  heartIcon.setAttribute("class", "price");
  productName = document.createElement("h4");
  heart.innerHTML = "Half Running Set";
  heartIcon.appendChild(heart);

  row.appendChild(image);
  row.appendChild(productText);
  row.appendChild(heartIcon);
  row.appendChild(rating);
  row.appendChild(image);

  products.appendChild(row);
}

<div class="price">
  <h4>Half Running Set</h4>
  <p>$99 - $129</p>
</div>;
