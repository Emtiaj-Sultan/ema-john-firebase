
import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json').then(res => res.json()).then(data => setProducts(data));
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];

        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]);


    const handleCart = (product) => {
        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }
        if (newCart.length > 0) {
            setCart(newCart);
        }
        addToDb(product.id);
    };

    const removeToCart = (product) => {
        let newCart = [];
        if (cart.length > 0) {
            const exists = cart.find(pd => pd.id === product.id);
            if (product.quantity > 0) {
                if (!exists) {
                    product.quantity = 0;
                    newCart = [...cart, product];
                }
                else {
                    exists.quantity = exists.quantity - 1;
                    if (exists.quantity < 0) {
                        exists.quantity = 0;
                        return;
                    }
                    else {
                        const remaining = cart.filter(pd => pd.id !== product.id);
                        newCart = [...remaining, exists];
                    }
                }
            }
        }
        if (newCart.length > 0) {
            setCart(newCart);
        }
        removeFromDb(product.id);
    };
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    };
    return (
        <div className="shop-container relative">
            <div>
                <div className="grid grid-cols-3 gap-11 mt-[120px] pl-[104px] pr-[82px] pb-6">
                    {
                        products.map(product => <Product key={product.id} product={product} handleCart={handleCart}
                            removeToCart={removeToCart}></Product>
                        )
                    }
                </div>
            </div>
            <div>
                <div className="py-7 sticky top-20 bg-[#FFE0B3]">
                    <Cart
                        cart={cart}
                        clearCart={clearCart}
                    >
                        <Link to='/orderPreview'>
                            Order Preview
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;;