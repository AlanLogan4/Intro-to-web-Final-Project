import { GetAccess, SetAccess, GetItemsInCart, UpdateCart, UpdateProducts } from "./service.js";

var products = [
  {
    title: "Water Bottle",
    description: "A 500ml reusable water bottle.",
    price: 10.99,
    quantity: 3,
    image: "/images/waterbottle.jpg",
  },
  {
    title: "Toothbrush",
    description: "A standard toothbrush with soft bristles.",
    price: 2.49,
    quantity: 2,
    image: "/images/toothbrush.jpg",
  },
  {
    title: "White T-shirt",
    description: "A plain white tee made from cotton.",
    price: 14.5,
    quantity: 5,
    image: "/images/tshirt.jpg",
  },
  {
    title: "Leather Wallet",
    description: "A classic wallet made from genuine leather.",
    price: 20.0,
    quantity: 4,
    image: "/images/wallet.jpg",
  },
  {
    title: "Soap Bar",
    description: "A fragrant soap bar for daily use.",
    price: 3.75,
    quantity: 1,
    image: "/images/soap.jpg",
  },
  {
    title: "Notebook",
    description: "A standard notebook for writing and note-taking.",
    price: 6.99,
    quantity: 3,
    image: "/images/notebook.jpg",
  },
  {
    title: "Lantern",
    description: "A portable lantern suitable for indoor and outdoor use.",
    price: 18.49,
    quantity: 2,
    image: "/images/lantern.jpg",
  },
  {
    title: "Shopping Bag",
    description: "A reusable shopping bag in a neutral color.",
    price: 2.5,
    quantity: 5,
    image: "/images/shopping-bag.jpg",
  },
  {
    title: "Straw Set",
    description: "A set of 4 drinking straws with a cleaning brush.",
    price: 7.99,
    quantity: 4,
    image: "/images/straws.jpg",
  },
  {
    title: "Yerba Maté ",
    description: "A 1kg bag of Yerba Maté.",
    price: 12.25,
    quantity: 2,
    image: "/images/yerba.jpg",
  },
];
var productsInCart = [];

export const CheckAccess = (username, password) => {
  const correctUsername = "123";
  const correctPassword = "1234";
  if (username === correctUsername && password === correctPassword) {
    SetAccess(true);

    return true;
  } else {
    return false;
  }
};
export const LogOut = () => {
  SetAccess(false);
};

const GetProduct = (titleOfWantedProduct) => {
  const product = products.filter(
    (product) => product.title === titleOfWantedProduct
  )[0];
  return product;
};

export const AddProductToCart = (titleOfProduct) => {
  const product = GetProduct(titleOfProduct);

  if (productsInCart.includes(product)) {
    const index = productsInCart.indexOf(product);
    productsInCart[index].quantity += 1;
  } else {
    product.quantity = 1;
    const newListOfProductsInCart = [...productsInCart, product];
    productsInCart = [...new Set(newListOfProductsInCart)];
  }
  UpdateCart(productsInCart);
};

export const RemoveProductFromCart = (productTitle) => {
  const product = GetProduct(productTitle);
  if (product.quantity > 1) {
    const index = productsInCart.indexOf(product);
    productsInCart[index].quantity -= 1;
  } else {
    productsInCart = productsInCart.filter((productInCart) => {
      return product.title !== productInCart.title;
    });
    console.log(productsInCart);
  }
  UpdateCart(productsInCart);
};

export const GetCurrentAccess = () => {
  return GetAccess();
};
export const GetProducts = () => {
  return [...products];
};
export const GetProductsInCart = () => {
  return GetItemsInCart();
};

export const RestockProduct = (product) =>
{
  const index = products.indexOf(product);
  products[index].quantity += 1;
  UpdateProducts(products);
}

export const GetTotalPrice = () => 
{
  var totalPrice;
  const itemsInCart = GetItemsInCart();
  itemsInCart.forEach(product => {
    totalPrice += product.price
    console.log(product.price)
  });
  console.log(totalPrice);
  return totalPrice;
}