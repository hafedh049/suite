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
  heart.setAttribute("class","bx bxs-heart-circle");
  heartIcon.appendChild(heart);

  const rating = document.createElement("div");
  rating.setAttribute("class", "rating");
  for(let ind = 0; ind <5;ind+=1){
    const star = document.createElement("i");
    star.setAttribute(() ?"bx bxs-star" : "bx bxs-star" );
    rating.appendChild();
  }
  heart = document.createElement("i");
  heart.setAttribute("class","bx bxs-heart-circle");
  heartIcon.appendChild(heart);

  row.appendChild(image);
  row.appendChild(productText);
  row.appendChild(heartIcon);
  row.appendChild(image);
  row.appendChild(image);

  products.appendChild(row);
}



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
