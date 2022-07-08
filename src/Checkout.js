import React from 'react';
import './Checkout.css';
import Header from './Header';
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal.js';
import { useStateValue } from './StateProvider';

const Checkout = () => {

  const [{basket}, dispatch] = useStateValue();
  return (
    <>
      <Header />
      <div className='checkout'>
        <div className="checkout_left">
          <img src="https://hotdealszone.com/wp-content/uploads/2018/10/great-indian-festival-sale-add-money-offer.png" alt="" className="checkout_ad"/>
          <div>
            <h2 className='checkout_title'>Your Shopping Cart</h2>
            {
              basket.map((item) => (
                <CheckoutProduct
                  id= {item.id}
                  title = {item.title}
                  image = {item.image}
                  price = {item.price}
                  rating = {item.rating} />
              ))}
          </div>
        </div>

        <div className="checkout_right">
          <SubTotal />
        </div>
      </div>
    </>
  )
}

export default Checkout;
