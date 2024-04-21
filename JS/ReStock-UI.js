import { CheckAccess, GetCurrentAccess, GetProducts, LogOut, RestockProduct } from "./domain.js";

const LoadLogIn = () => {
  const container = document.getElementById("container");
  container.replaceChildren();

  const form = document.createElement("form");

  const usernameLabel = document.createElement("label");
  usernameLabel.textContent = "Username";
  form.appendChild(usernameLabel);

  const usernameInput = document.createElement("input");
  usernameInput.type = "text";
  form.appendChild(usernameInput);

  const passwordLabel = document.createElement("label");
  passwordLabel.textContent = "Password";
  form.appendChild(passwordLabel);

  const passwordInput = document.createElement("input");
  passwordInput.type = "text";
  form.appendChild(passwordInput);

  const submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.id = "submit-button";
  form.appendChild(submitButton);
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (CheckAccess(usernameInput.value, passwordInput.value)) {
      const container = document.getElementById("login-form");
      console.log(container)
      form.hidden = true;
      console.log(GetCurrentAccess());
      LoadReStock();
    } else {
      console.log("no");
    }
  });
  container.appendChild(form);
};
const LoadReStock = () => {
  const container = document.getElementById("container");
  container.replaceChildren();

  const products = GetProducts();
  products.forEach(product => {
    const cardDiv = CreateProductCard(product);
    container.appendChild(cardDiv);
  });
  const logOut = document.createElement("button")
  logOut.textContent = "Log Out"
  logOut.addEventListener("click", (event)=>{
    event.preventDefault();
    LogOut();
    container.replaceChildren();
    LoadLogIn();
    
  })
  container.appendChild(logOut);
};

const CreateProductCard = (product) =>
{
  const productDiv = document.createElement("div");
  productDiv.classList.add("product")

  const title = document.createElement("h2");
  title.textContent = product.title;
  productDiv.appendChild(title);

  const image = document.createElement("img");
  image.src = product.image;
  productDiv.appendChild(image);

  const amountLeft = document.createElement("h4");
  amountLeft.classList.add("amount")
  amountLeft.textContent = `Left in Stock: ${product.quantity}`;
  productDiv.appendChild(amountLeft);

  const reStockButton = document.createElement("button");
  reStockButton.textContent = "restock";
  reStockButton.addEventListener("click", (event)=>{
    event.preventDefault()
    RestockProduct(product);
    LoadReStock();
  })
  productDiv.appendChild(reStockButton);

  return productDiv
}

console.log(GetCurrentAccess());

if (GetCurrentAccess()) {
  console.log(GetCurrentAccess());
  LoadReStock();
} else if (!GetCurrentAccess()) {
  console.log(GetCurrentAccess());
  LoadLogIn();
}
