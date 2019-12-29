import {connect} from 'react-redux';
import Sort from './Sort';
import {getProductListBySort} from '../ProductList/ProductList.action';

const mapStateToProps = (store) => ({
    data: store.productListReducer.result
})
const mapDispatchToProps = {
    getProductListBySort
}


export default connect(mapStateToProps, mapDispatchToProps)(Sort);