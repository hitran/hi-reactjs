import {connect} from 'react-redux';
import Login from './Login';
import loginAction from './Login.action';


const mapStateToProps = (store) => ({
    load: store.loginReducer.load,
    data: store.loginReducer.result,
    error: store.loginReducer.fail
});

const mapDispatchToProps = {
    loginAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);