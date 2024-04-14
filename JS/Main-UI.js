import { AddProductToCart, GetProducts, GetProductsInCart } from "./domain.js";

const LoadProducts = () => {
  const ListOfProducts = GetProducts();
  const container = document.getElementById("Product-Container");
  container.replaceChildren();

  const inStock = document.createElement("h1");
  inStock.textContent = "In Stock";
  container.appendChild(inStock);

  ListOfProducts.forEach((product) => {
    const cardDiv = CreateProductCard(product);
    container.appendChild(cardDiv);
  });
  container.addEventListener("dragenter", (event) => {
    //console.log("you have enter");
  });
  container.addEventListener("dragleave", (event) => {
    //console.log("you have left");
  });
  container.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
  container.addEventListener("drop", (event) => {
    const productTitle = event.dataTransfer.getData("text/plain");
    console.log(productTitle);
  });
};
const LoadCart = () => {
  const ListOfProducts = GetProductsInCart();
  const container = document.getElementById("cart");
  container.replaceChildren();

  const cart = document.createElement("h1");
  cart.textContent = "Cart";
  container.appendChild(cart);

  ListOfProducts.forEach((product) => {
    if (product.quantity === 0) {
    } else {
      const cardDiv = CreateProductCard(product);
      container.appendChild(cardDiv);
    }
  });

  container.addEventListener("dragenter", (event) => {
    container.classList.add("hoverclass");
    //console.log("you have enter");
  });
  container.addEventListener("dragleave", (event) => {
    //console.log("you have left");
    container.classList.remove("hoverclass");

  });
  container.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
  container.addEventListener("drop", (event) => {
    container.classList.remove("hoverclass");

    const productTitle = event.dataTransfer.getData("text/plain");
    console.log(productTitle);
    container.replaceChildren();
    AddProductToCart(productTitle);

    const ListOfProducts = GetProductsInCart();
    ListOfProducts.forEach((product) => {
      if (product.quantity === 0) {
      } else {
        const cardDiv = CreateProductCard(product);
        container.appendChild(cardDiv);
      }
    });
  });
};

const CreateProductCard = (product) => {
  const cardDiv = document.createElement("div");
  cardDiv.className = "product";
  cardDiv.draggable = true;

  const title = document.createElement("h2");
  title.textContent = product.title;
  cardDiv.appendChild(title);

  const description = document.createElement("p");
  description.textContent = product.description;
  cardDiv.appendChild(description);

  const price = document.createElement("p");
  price.textContent = `Price: $${product.price}`;
  cardDiv.appendChild(price);

  const quantity = document.createElement("p");
  quantity.textContent = `Quantity: `;
  quantity.textContent +=
    product.quantity === 0 ? "Out of stock" : product.quantity;
  cardDiv.appendChild(quantity);

  const image = document.createElement("img");
  image.src = product.image;
  cardDiv.appendChild(image);

  cardDiv.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", product.title);
  });
  return cardDiv;
};

LoadProducts();
LoadCart();
