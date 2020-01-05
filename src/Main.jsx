import React, { useState, useContext, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loading from './components/Loading/Loading';
import Layout from './components/Layout/Layout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const ProductList = React.lazy(() => import('./components/ProductList/ProductList.Container'));
const ProductDetail = React.lazy(() => import('./components/ProductDetail/ProductDetail.Container'));
const Login = React.lazy(() => import('./components/Login/Login.Container'));
const Register = React.lazy(() => import('./components/Register/Register.Container'));
const NotFound = React.lazy(() => import('./components/NotFound/NotFound'));
const SideBar = React.lazy(() => import('./components/SideBar/SideBar'));
const ShoppingCart = React.lazy(() => import('./components/ShoppingCart/ShoppingCart.Container'));

function Main() {
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);

    const getSelectedProduct = (product) => {
        const i = selectedProducts.findIndex(elm => elm.product_id === product.product_id);
        if (i > -1) {
            const newSelectedProducts = [...selectedProducts];
            newSelectedProducts[i]['qty'] += 1;
            setSelectedProducts(newSelectedProducts);
        } else {
            setSelectedProducts([...selectedProducts, product]);
        }
        setTotalPrice(totalPrice + product.final_price);
        setTotalProducts(totalProducts + 1);
    }

    // const onFilterClicked = () => {
    //     const products = [...productList];
    //     setProductList(products.filter(product => product.final_promotion_percent >= 10))
    // }

    return (
        <>
            <Router>
                <Header totalItems={totalProducts}>
                    {/* <Cart selectedProducts={selectedProducts} totalPrice={totalPrice} /> */}
                </Header>
                <React.Suspense fallback={<Loading />} >
                    <Switch>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path="/" exact>
                            <Layout>
                                <ProductList onProductClicked={getSelectedProduct} />
                                <SideBar/>
                            </Layout>
                        </Route>
                        <PrivateRoute path="/product/:productId">
                            <ProductDetail />
                        </PrivateRoute>
                        <Route path="/shopping-cart">
                            <ShoppingCart/>
                        </Route>
                        <Route path="*"><NotFound /></Route>
                    </Switch>
                </React.Suspense>
                <Footer />
            </Router>
        </>
    )
}

export default Main;
