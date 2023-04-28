import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';

const Cart = ({ cart, clearCart, children }) => {
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
    }
    const tax = total * 7 * 0.01;
    const grandTotal = total + totalShipping + tax;
    return (
        <div>
            <h3 className="text-center text-2xl pb-8 text-[#1C2B35]">Order summary</h3>
            <div className="pl-6 cart-items">
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
            </div>
            <div className='p-4 flex flex-col gap-y-3'>
                <button onClick={clearCart} className={`text-white bg-[#FF3030] w-full rounded-[4px] p-2 ${children.props.children === 'Order Preview' ? '' : 'flex items-center justify-between '}`}><span className='font-semibold mr-3'>Clear Cart</span>
                    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                </button>

                <button className={`text-white bg-[#FF9900] w-full rounded-[4px] p-2 ${children.props.children === 'Order Preview' ? '' : 'flex items-center justify-between '}`}><span className='font-semibold mr-3'>{children}</span>
                    <FontAwesomeIcon icon={children.props.children === 'Order Preview' ? faArrowRight : faCreditCard}></FontAwesomeIcon>
                </button>

            </div>
        </div>
    );
};

export default Cart;