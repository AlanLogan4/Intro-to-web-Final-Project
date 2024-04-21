import { GetProductsInCart, GetTotalPrice } from "./domain.js";

const LoadProductsInCart = () => {
  const productsInCart = GetProductsInCart();
  const container = document.getElementById("Checkout-Container");
  container.replaceChildren();

  productsInCart.forEach((product) => {
    const cardDiv = CreateProductCart(product);
    container.appendChild(cardDiv);
  });
};

const CreateProductCart = (product) => {
  const cardDiv = document.createElement("div");
  cardDiv.className = "product";

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
  quantity.textContent = `Quantity ${product.quantity}`;
  cardDiv.appendChild(quantity);

  const image = document.createElement("img");
  image.src = product.image;
  cardDiv.appendChild(image);
  return cardDiv;
};
const LoadTotal = () => {
  const totalPrice = GetTotalPrice();
  const container = document.getElementById("Total");
  container.replaceChildren();

  const title = document.createElement("h1");
  title.textContent = "Total";
  const amount = document.createElement("h2");
  amount.textContent = `$${totalPrice}`; 
  container.appendChild(title);
  container.appendChild(amount);
};
LoadProductsInCart();
LoadTotal();
