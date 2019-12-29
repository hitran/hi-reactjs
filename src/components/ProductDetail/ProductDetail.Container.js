import {connect} from 'react-redux';
import ProductDetail from './ProductDetail';
import {addToCartAction} from '../ShoppingCart/ShoppingCart.action';
import {getProductDetailById} from './ProductDetail.action';

const mapStateToProps = (store) => ({
    load: store.productDetailReducer.load,
    data: store.productDetailReducer.result,
    productsInCart: store.shoppingCartReducer.result,
    error: store.productDetailReducer.fail
})

const mapDispatchToProps = {
    addToCartAction,
    getProductDetailById
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);