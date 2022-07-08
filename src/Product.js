import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

const Product = ({ productData }) => {
  const {id, title, price, description, image, rating} = {productData};
  const [dispatch] = useStateValue();
  
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item:{
        id: id,
        image: image,
        price: price,
        rating: rating
      },
    });
  };

  return (
    <>
      {productData.map((curElement) => {
        const { id, title, price, description, image, rating } = curElement;
        return (
          <div className='product' key={id}>
            <div className="product_info">
              <p className='prod_desc'>{title}</p>
              <p className='product_price'><small>$</small><strong>{price}</strong></p>
            </div>
            <img src={image} alt={description} />
            <div className="product_rating">{rating.rate}</div>
            <button onClick={addToBasket}>Add to Cart</button>
          </div>)
      }
      )}
    </>)
}

export default Product;
