import {connect} from 'react-redux';
import ShoppingCart from './ShoppingCart';
import {addToCartAction} from './ShoppingCart.action';

const mapStateToProps = (store) => ({
    load: store.shoppingCartReducer.load,
    data: store.shoppingCartReducer.data,
    error: store.shoppingCartReducer.fail
})

const mapDispatchToProps = {
    addToCartAction
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);