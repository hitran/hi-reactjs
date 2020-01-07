import React, { useEffect } from 'react';
import ProductItem from '../ProductItem/ProductItem';

function ProductList(props) {
    useEffect(() => {
        props.getProductListAction();
    },[])
    return (
        <div className="col-xl-9 col-lg-8">
            {/* tab filter */}
            <div className="row mb-10">
                <div className="col-xl-5 col-lg-6 col-md-6">
                    <div className="product-showing mb-40">
                        <p>Trending:</p>
                        <span>Bitis Hunter</span>
                    </div>
                </div>
            </div>
            {/* tab content */}
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="row">
                        {props.data ?
                            props.data.map(elm => {
                                return<ProductItem key={elm.product_id} {...elm}/>
                            }): null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList;