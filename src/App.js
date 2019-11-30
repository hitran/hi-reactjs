import React from 'react';
import ProductInfo from './ProductInfo';
import ProductImage from './ProductImage';
import data from './data.json';
import './App.css';

function App() {
  const productList = data.data;

  return (
    <div className="App">
      <p>Hello ReactJS!</p>
      <p>Thuc Hi</p>
      <div className="ProductList">
        {productList.map(product =>
          <div className="Product">

            <ProductImage
              isOnSale={parseInt(product.is_promotion) > 0}
              imgSrc={product.img_url} />

            <ProductInfo
              category={product.category}
              name={product.name}
              isOnSale={parseInt(product.is_promotion) > 0}
              finalPrice={product.final_price.toLocaleString()}
              price={product.price.toLocaleString()} />
          </div>
        )}
      </div>

    </div>
  );
}

export default App;