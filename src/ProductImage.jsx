import React from 'react';

function ProductImage(props) {
    return (
        <div>
            <img src={props.imgSrc} alt="product" />
            {props.isOnSale ? <span className="SaleTag">SALE</span> : null}
        </div>
    );
}

export default ProductImage;