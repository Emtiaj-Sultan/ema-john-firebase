import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReviewItem = ({ product, removeFromCart }) => {
    const { id, img, name, quantity, price, shipping } = product;
    let totalShipping = 0;
    totalShipping = totalShipping + shipping * quantity;

    return (
        <div className='border-[1px] border-[#95A0A7] w-[571px] rounded-[8px] my-6 p-[8px] mx-auto flex justify-between items-center'>
            <div className='flex items-center'>
                <img className='w-[91px] shadow-md rounded' src={img} alt="" />
                <div className='ml-4'>
                    <h4 className='text-lg'>{name}</h4>
                    <p>{quantity}</p>
                    <p className='text-base py-2'>Price: <span className='text-amber-500 '>{price}</span></p>
                    <p className='text-base'>Shipping Charge: <span className='text-amber-500 '>{totalShipping}</span></p>
                </div>
            </div>

            <button onClick={() => removeFromCart(product)} className='text-[#EB5757] bg-[#EB57574D] rounded-full h-[50px] w-[50px] flex items-center justify-center mr-2'><FontAwesomeIcon icon={faTrashCan} className="text-2xl font-semibold"></FontAwesomeIcon></button>

        </div>
    );
};

export default ReviewItem;