import { connect } from 'react-redux';
import Register from './Register';
import { registerAction } from './Register.action';


const mapStateToProps = (store) => ({
    load: store.registerReducer.load,
    data: store.registerReducer.result,
    error: store.registerReducer.fail
});

const mapDispatchToProps =  {
    registerAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);