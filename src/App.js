import React from 'react';
import product1 from './product1.jpg';
import product2 from './product2.jpg';
import product3 from './product3.jpg';
import product4 from './product4.jpg';
import './App.css';


function App() {
  return (
    <div className="App">
      <p>Hello ReactJS!</p>
      <p>Thuc Hi</p>
      <div className="ProductList">
        <div className="Product">
          <div>
            <img src={product1} alt="product1" />
            <span className="SaleTag">SALE</span>
          </div>
          <div>
            <p className="Category">FURNITURE</p>
            <p className="ProductName">Minimal Deco Furniture</p>
            <p className="Price">$100.00 USD<span><strike>$240.00 USD</strike></span></p>
          </div>
        </div>
        <div className="Product">
          <div>
            <img src={product2} alt="product2" />
            <span className="SaleTag">SALE</span>
          </div>
          <div>
            <p className="Category">FURNITURE</p>
            <p className="ProductName">Minimal Deco Furniture</p>
            <p className="Price">$119.00 USD<span><strike>$230.00 USD</strike></span></p>
          </div>
        </div>
        <div className="Product">
          <div>
            <img src={product3} alt="product3" />
          </div>
          <div>
            <p className="Category">FURNITURE</p>
            <p className="ProductName">Minimal Deco Furniture</p>
            <p className="Price">$219.00 USD</p>
          </div>
        </div>
        <div className="Product">
          <div>
            <img src={product4} alt="product4" />
          </div>
          <div>
            <p className="Category">FURNITURE</p>
            <p className="ProductName">Minimal Deco Furniture</p>
            <p className="Price">$219.00 USD</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;