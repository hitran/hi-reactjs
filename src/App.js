import React from 'react';
import product1 from './product1.jpg';
import ProductInfo from './ProductInfo';
import ProductImage from './ProductImage';
import './App.css';

function App() {
  const product =
  {
    imgSrc: product1,
    price: 240,
    category: 'FURNITURE',
    name: 'Minimal Deco Furniture',
    isOnSale: true,
    finalPrice: 100
  };

  return (
    <div className="App">
      <p>Hello ReactJS!</p>
      <p>Thuc Hi</p>
        <div className="Product">
          <ProductImage
            isOnSale={product.isOnSale}
            imgSrc={product.imgSrc} />

          <ProductInfo
            category={product.category}
            name={product.name}
            isOnSale={product.isOnSale}
            finalPrice={product.finalPrice}
            price={product.price} />
      </div>
    </div>
  );
}

export default App;