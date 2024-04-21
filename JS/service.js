const accessKey = "access";
const cartKey = "itemsInCart";
const productsKey = "productsInStock"

export const SetAccess = (access) => {
  const accessAsJson = JSON.stringify(access);
  localStorage.setItem(accessKey, access);
};
export const GetAccess = () => {
  const storedAccess = localStorage.getItem(accessKey);
  return JSON.parse(storedAccess);
};

export const UpdateCart = (itemsInCart) => 
{
    const cartAsJson = JSON.stringify(itemsInCart);
    localStorage.setItem(cartKey,cartAsJson);
};

export const GetItemsInCart = () => 
{
    const itemsInCart = localStorage.getItem(cartKey);
    return itemsInCart != null? JSON.parse(itemsInCart) : [];
};

export const UpdateProducts = (products) =>
{
  const productsAsJson = JSON.stringify(products);
  localStorage.setItem(productsKey, productsAsJson);
}

export const GetProductsInStock = () =>{
  const products = localStorage.getItem(productsKey);
  return JSON.parse(products);
}