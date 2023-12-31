window.addEventListener("keydown", function (event) {
  // Prevent zooming using Ctrl+, Ctrl-, and Ctrl=
  if (
    (event.ctrlKey || event.metaKey) &&
    (event.key === "+" || event.key === "-" || event.key === "=")
  ) {
    event.preventDefault();
  }
});

const header = document.querySelector("#header");

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
    price.setAttribute("class", "price");

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

function loadUpdates() {
  const updates = document.getElementById("updates");
  for (let index = 1; index <= 3; index += 1) {
    const update = document.createElement("div");
    update.setAttribute("class", "cart");

    const image = document.createElement("img");
    image.setAttribute("src", "images/bl-" + index + ".png");

    const updateDate = document.createElement("h5");
    updateDate.innerHTML = "26 JAN 2022";

    const updateTitle = document.createElement("h4");
    updateTitle.innerHTML = "Let's start bring sale on this summer vacation.";

    const updateDescription = document.createElement("p");
    updateDescription.innerHTML = `The shopping process was seamless and secure. I was able to create an account quickly and easily, and
    the checkout system was straightforward and efficient. I also appreciated the various payment
    options available, including major credit cards and online payment platforms.`;

    const updateCR = document.createElement("h6");
    updateCR.innerHTML = "Continue Reading...";

    update.appendChild(image);
    update.appendChild(updateDate);
    update.appendChild(updateTitle);
    update.appendChild(updateDescription);
    update.appendChild(updateCR);

    updates.appendChild(update);
  }
}

function loadContact() {
  const contacts = document.getElementById("contact-info");
  const items = new Map();
  items.set("second-info", [
    "Support",
    "Contact Me",
    "About",
    "Size Guide",
    "Size Shopping & Returns",
    "Privacy",
  ]);
  items.set("third-info", [
    "Shop",
    "Men's Shopping",
    "Women's Shopping",
    "Kid's Shopping",
    "Furniture",
    "Discount",
  ]);
  items.set("fourth-info", ["Company", "About", "Blog", "Affiliate", "Login"]);
  items.set("fifth-info", [
    "Subscribe",
    "Receive Updates, Hot Deals, Discounts Sent Straight In Your Inbox Daily.",
    "Exclusive offers, new arrivals, delivered to your inbox!.",
    "Get the latest deals, limited-time offers, right to your email!",
  ]);

  for (let [key, value] of items) {
    const contact = document.createElement("div");
    contact.setAttribute("class", key);
    const h4 = document.createElement("h4");
    h4.innerHTML = value.shift();
    contact.appendChild(h4);
    value.forEach((element) => {
      const p = document.createElement("p");
      p.innerHTML = element;
      contact.appendChild(p);
    });
    contacts.appendChild(contact);
  }
}
