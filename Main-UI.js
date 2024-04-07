import { GetProducts } from "./domain.js";

const LoadProducts=() => 
{
    const ListOfProducts = GetProducts();
    const container = document.getElementById("Product-Container");
    container.replaceChildren();
    ListOfProducts.forEach(product => {
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
        price.textContent = product.price;
        cardDiv.appendChild(price);

        const quantity = document.createElement("p");
        quantity.textContent = product.quantity;
        cardDiv.appendChild(quantity);

        const image = document.createElement("img");
        image.src = product.image;
        cardDiv.appendChild(image);

        container.appendChild(cardDiv);
    });
}
LoadProducts();