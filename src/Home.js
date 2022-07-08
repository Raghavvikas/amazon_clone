import React, {useState} from 'react';
import './Home.css';
import Product from './Product';
import Data from './DataApi';
import Header from './Header';

const Home = () => {

    const {productData} = useState(Data);

    return (
        <div>
            <Header />
            <div className="home">
                <div className="home_container"></div>
                <img src="https://wallpaperaccess.com/full/1383586.jpg" className='home_image' alt="amazon" />

                <div className="home_row">
                    <Product 
                        productData={productData}
                    />
                    <Product productData={productData}/>
                </div>

                <div className="home_row">
                    <Product productData={productData}/>
                    <Product productData={productData}/>
                    <Product productData={productData}/>
                </div>
                <div className="home_row">
                    <Product productData={productData}/>
                </div>
            </div>
        </div>
    )
}

export default Home;
