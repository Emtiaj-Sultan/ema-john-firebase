// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = getShoppingCart();
    // add quantity
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
};

const removeFromDb = id => {
    const shoppingCart = getShoppingCart();
    let key = Object.keys(shoppingCart);
    key.forEach(key => {
        if (key === id) {
            const quantity = shoppingCart[id];
            if (quantity == 1) {
                // shoppingCart[id] = 1;
                delete shoppingCart[id];
            }
            else {
                shoppingCart[id] = quantity - 1;
            }
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    });
    // console.log(value);
    // if (id in shoppingCart) {
    //     value = value - 1;
    //     console.log(id);
    //     if (value > 0) {

    //         localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    //     }
    // if (value > 1) {
    //     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    // }
};

const getShoppingCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
};

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
};

export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart
};
