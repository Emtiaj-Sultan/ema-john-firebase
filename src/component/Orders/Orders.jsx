import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, getShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const loadData = useLoaderData();
    const [cart, setCart] = useState(loadData);

    const removeFromCart = (product) => {

        const remaining = cart.filter(pd => pd.id !== product.id);


        const findData = cart.find(data => data.id === product.id);
        const getShoppingCartData = getShoppingCart();
        delete getShoppingCartData[findData.id];
        localStorage.setItem('shopping-cart', JSON.stringify(getShoppingCartData));

        setCart(remaining);
        console.log(findData);
    };
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    };
    return (
        <div className='shop-container w-[90%] mx-auto mt-32'>
            <div>
                {
                    cart.map(data => <ReviewItem
                        product={data}
                        key={data.id}
                        removeFromCart={removeFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='bg-[#FFE0B3] py-4 rounded shadow-md h-[450px]'>
                <Cart
                    cart={cart}
                    clearCart={clearCart}
                >
                    <Link to='/checkout'>
                        Proceed Checkout
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;