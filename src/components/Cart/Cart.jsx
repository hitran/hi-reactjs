import React from 'react';

export default function Cart(props) {
    const selectedProduct = props.selectedProducts.map(product =>
        (
            <li>
                <div className="cart-img">
                    <a href="#">
                        <img src={product.img_url} alt="" />
                    </a>
                </div>
                <div className="cart-content">
                    <h3>
                        <a href="#">{product.name}</a>
                    </h3>
                    <div className="cart-price">
                        <span className="new">{product.final_price.toLocaleString()} VND </span>
                        <span>
                            <del>{product.price.toLocaleString()} VND </del>
                        </span>
                    </div>
                </div>
                <div className="del-icon">
                    <a href="#">
                        <i className="far fa-trash-alt"></i>
                    </a>
                </div>
            </li>
        )
    );

    return (
        <ul className="minicart">
            {selectedProduct}
            <li>
                <div className="total-price">
                    <span className="f-left">Total: {props.totalPrice.toLocaleString()} VND</span>
                    <span className="f-right"></span>
                </div>
            </li>
            <li>
                <div className="checkout-link">
                    <a href="#">Shopping Cart</a>
                    <a className="red-color" href="#">Checkout</a>
                </div>
            </li>
        </ul>
    )
}