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
  row.appendChild(image);
  row.appendChild(productText);
  row.appendChild(image);
  row.appendChild(image);
  row.appendChild(image);
  products.appendChild(row);
}

<div class="row">
  <div class="product-text">
    <h5>Sale</h5>
  </div>
  <div class="heart-icon">
    <i class="bx bxs-heart-circle"></i>
  </div>
  <div class="rating">
    <i class="bx bxs-star"></i>
    <i class="bx bxs-star"></i>
    <i class="bx bxs-star"></i>
    <i class="bx bxs-star"></i>
    <i class="bx bxs-star-half"></i>
  </div>
  <div class="price">
    <h4>Half Running Set</h4>
    <p>$99 - $129</p>
  </div>
</div>;
