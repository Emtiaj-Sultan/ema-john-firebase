import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const fetchData = await fetch('products.json');
    const resData = await fetchData.json();

    const storedData = getShoppingCart();
    const saveData = [];

    for (const id in storedData) {
        const addedProduct = resData.find(product => product.id === id);
        if (addedProduct) {
            const quantity = storedData[id];
            addedProduct.quantity = quantity;
            saveData.push(addedProduct);
        }
    }
    return saveData;
};

export default cartProductsLoader;