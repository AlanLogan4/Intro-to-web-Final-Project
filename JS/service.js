const accessKey = "access";
const cartKey = "itemsInCart";
const productsKey = "productsInStock";
const url = "http://localhost:5011/purchases";

export const SetAccess = (access) => {
  const accessAsJson = JSON.stringify(access);
  localStorage.setItem(accessKey, accessAsJson);
};
export const GetAccess = () => {
  const storedAccess = localStorage.getItem(accessKey);
  if (!storedAccess) {
    return false;
  }
  return JSON.parse(storedAccess);
};

export const UpdateCart = (itemsInCart) => {
  const cartAsJson = JSON.stringify(itemsInCart);
  localStorage.setItem(cartKey, cartAsJson);
};

export const GetItemsInCart = () => {
  const itemsInCart = localStorage.getItem(cartKey);
  return itemsInCart != null ? JSON.parse(itemsInCart) : [];
};

export const UpdateProducts = (products) => {
  const productsAsJson = JSON.stringify(products);
  localStorage.setItem(productsKey, productsAsJson);
};

export const GetProductsInStock = () => {
  const products = localStorage.getItem(productsKey);
  if (!products) {
    return [
      {
        title: "Water Bottle",
        description: "A 500ml reusable water bottle.",
        price: 10.99,
        quantity: 10,
        image: "/images/waterbottle.jpg",
      },
      {
        title: "Toothbrush",
        description: "A standard toothbrush with soft bristles.",
        price: 2.49,
        quantity: 10,
        image: "/images/toothbrush.jpg",
      },
      {
        title: "White T-shirt",
        description: "A plain white tee made from cotton.",
        price: 14.5,
        quantity: 3,
        image: "/images/tshirt.jpg",
      },
      {
        title: "Leather Wallet",
        description: "A classic wallet made from genuine leather.",
        price: 20,
        quantity: 5,
        image: "/images/wallet.jpg",
      },
      {
        title: "Soap Bar",
        description: "A fragrant soap bar for daily use.",
        price: 3.75,
        quantity: 0,
        image: "/images/soap.jpg",
      },
      {
        title: "Notebook",
        description: "A standard notebook for writing and note-taking.",
        price: 6.99,
        quantity: 2,
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
  }
  return JSON.parse(products);
};

export const ClearEverything = () => {
  localStorage.removeItem(cartKey);
  localStorage.removeItem(productsKey);
};

export const ResetCart = () => {
  localStorage.removeItem(cartKey);
};

export const CreatePurchaseOnApi = async (name, cardNumber, moneyspended) => {
  const newPurchase = {
    time: new Date(),
    name,
    cardNumber,
    totalSpend: moneyspended,
  };
  console.log(newPurchase);

  await fetch(url, {
    method: "POST",
    body: JSON.stringify(newPurchase),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const LoadPurchasesFromApi = async () => {
  const response = await fetch(url);
  const body = await response.json();
  return body;
};
