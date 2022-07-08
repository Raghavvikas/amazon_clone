import React from 'react';
import "./SubTotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

const SubTotal = () => {

  const [{basket}, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
      <CurrencyFormat renderText={(value) => (
        <>
            <p>
                Subtotal ({basket.length} items): <strong>${value}</strong>
            </p>
            <small className='subtotal_gift'>
                <input type="checkbox">Order contains a gift</input>
            </small>
        </>
  )}

      decimalScale={2}
      value={0}
      displayType={"text"}
      thousandSeparator={true}
      
      />
    </div>
  )
}

export default SubTotal
