import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({id, image, title, price, rating}) => {
  const [{basket}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id,
    })
  }
  return (
      <div className='checkoutProduct' key={id}>
            <img src={image} alt="" className="checkoutProduct_image" />

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}
                </p>
                <p className='checkoutProduct_price'>
                    <small>$</small><strong>{price}</strong></p>
                    <div className="checkout_rating">{rating}</div>
                    <button onClick={removeFromBasket}>
                         Remove from the Cart
                    </button>
            </div>
          </div>
  )
}

export default CheckoutProduct
