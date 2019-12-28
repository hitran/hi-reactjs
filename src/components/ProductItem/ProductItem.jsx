import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {DataContext} from '../DataContext/DataContext';

function ProductItem({onProductClicked, img_url, shop_name, name, final_price, price, product_id}) {
    const getProductName = () => {
        onProductClicked({img_url, name, final_price, price, product_id, qty: 1});
    }
    const context = useContext(DataContext);
    return (
        <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="product-wrapper mb-50">
                <div className="product-img mb-25">
                    <a href="#">
                        <img src={img_url} alt="" />
                    </a>
                    <div className="product-action text-center">
                        <a onClick={getProductName} title="Shoppingb Cart">
                            <i className="fas fa-shopping-cart" />
                        </a>
                        <Link to={`/product/${product_id}`} title="Quick View">
                            <i className="fas fa-search" />
                        </Link>
                    </div>
                </div>
                <div className="product-content pr-0">
                    <div className="pro-cat mb-10">
                        <a href="#">{shop_name}</a>
                    </div>
                    <h4>
                        <a href="#">{name}</a>
                    </h4>
                    <div className="product-meta">
                        <div className="pro-price">
                            <span>{final_price.toLocaleString()} VND</span>
                            <span className="old-price">{price.toLocaleString()} VND</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;