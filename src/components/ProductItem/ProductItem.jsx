import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {DataContext} from '../DataContext/DataContext';

function ProductItem({img_url, shop_name, name, final_price, price, product_id}) {

    return (
        <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="product-wrapper mb-50">
                <div className="product-img mb-25">
                    <Link to={`/product/${product_id}`}>
                        <img src={img_url} alt="" />
                    </Link>
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
                            <span>{final_price.toLocaleString()}đ</span>
                            <span className="old-price">{price.toLocaleString()}đ</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;