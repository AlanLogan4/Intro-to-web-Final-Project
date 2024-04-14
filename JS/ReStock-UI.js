import { CheckAccess, GetCurrentAccess } from "./domain.js";

const LoadLogIn = () => {
  const container = document.getElementById("login-form");
  container.replaceChildren();

  const usernameLabel = document.createElement("label");
  usernameLabel.textContent = "Username";
  container.appendChild(usernameLabel);

  const usernameInput = document.createElement("input");
  usernameInput.type = "text";
  container.appendChild(usernameInput);

  const passwordLabel = document.createElement("label");
  passwordLabel.textContent = "Password";
  container.appendChild(passwordLabel);

  const passwordInput = document.createElement("input");
  passwordInput.type = "text";
  container.appendChild(passwordInput);

  const submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.id = "submit-button";
  container.appendChild(submitButton);
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (CheckAccess(usernameInput.value, passwordInput.value)) {
      const container = document.getElementById("login-form");
      container.hidden = true;
      console.log(GetCurrentAccess());
      LoadReStock();
    } else {
      console.log("no");
    }
  });
};
const LoadReStock = () => {
  const container = document.getElementById("container");
  container.replaceChildren();
  const title = document.createElement("h1");
  title.textContent = "Hello, World!";
  container.appendChild(title);
};
const access = GetCurrentAccess();
console.log(GetCurrentAccess());
if (access) {
  console.log(GetCurrentAccess());
  LoadReStock();
} else if (!access) {
  console.log(GetCurrentAccess());
  LoadLogIn();
}
