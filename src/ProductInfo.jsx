import React from 'react';

function ProductInfo(props) {
    return (
        <div><p className="Category">{props.category}</p>
            <p className="ProductName">{props.name}</p>
            <p className="Price">{`$ ${props.finalPrice} USD`}
                {props.isOnSale ? <span><strike>{`$ ${props.price} USD`}</strike></span> : null}
            </p>
        </div>
    );
}

export default ProductInfo;