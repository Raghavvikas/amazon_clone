import React, {useState} from 'react';
import "./SubTotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";


const SubTotal = () => {
  

  
  const [{basket}, dispatch] = useStateValue();
  console.log([getBasketTotal]);
  

  return (
    <div className='subtotal'>
      
      <CurrencyFormat renderText={(value) => (
        <>
            <p>
                Subtotal ({basket.length} items): <strong>${value}</strong>
            </p>
            <small className='subtotal_gift'>
                <input type="checkbox" />This order contains gifts.
            </small>
        </>
  )}

      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={"text"}
      thousandSeparator={true}
      
      />
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default SubTotal;
