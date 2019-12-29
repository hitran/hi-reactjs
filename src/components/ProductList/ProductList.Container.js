import {connect} from 'react-redux';
import ProductList from './ProductList';
import {getProductListAction} from './ProductList.action';

const mapStateToProps = (store) => ({
    load: store.productListReducer.load,
    data: store.productListReducer.result,
    error: store.productListReducer.fail
})

const mapDispatchToProps = {
    getProductListAction
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);