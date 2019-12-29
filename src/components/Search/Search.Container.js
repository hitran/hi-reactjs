import {connect} from 'react-redux';
import Search from './Search';
import {getProductListBySearch} from '../ProductList/ProductList.action';

const mapDispatchToProps = {
    getProductListBySearch
}


export default connect(null, mapDispatchToProps)(Search);