import React, { useState, useContext, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import dataJson from './phone.json';
import Loading from './components/Loading/Loading';
import Layout from './components/Layout/Layout';
const ProductList = React.lazy(() => import('./components/ProductList/ProductList'));
const ProductDetail = React.lazy(() => import('./components/ProductDetail/ProductDetail'));
const Login = React.lazy(() => import('./components/Login/Login'));
const Register = React.lazy(() => import('./components/Register/Register'));
const NotFound = React.lazy(() => import('./components/NotFound/NotFound'));
const SideBar = React.lazy(() => import('./components/SideBar/SideBar'));

function Main() {
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);
    const [productList, setProductList] = useState(dataJson.data);

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

    const onSortClicked = (sortType) => {
        // create a new copy of products and modify it
        const products = [...dataJson.data];
        if (sortType === 'z to a') {
            setProductList(products.sort((a, b) => {
                if (a.name > b.name) {
                    return -1;
                } else if (a.name < b.name) {
                    return 1;
                }
                return 0;
            }))
        } else if (sortType === 'a to z') {
            setProductList(products.sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                } else if (a.name > b.name) {
                    return 1;
                }
                return 0;
            }))
        } else if (sortType === 'low to high') {
            setProductList(products.sort((a, b) => a.final_price - b.final_price));
        } else if (sortType === 'high to low') {
            setProductList(products.sort((a, b) => b.final_price - a.final_price));
        }
    }

    const onFilterClicked = () => {
        const products = [...productList];
        setProductList(products.filter(product => product.final_promotion_percent >= 10))
    }

    const onSearchClicked = (searchQuery) => {
        const products = [...dataJson.data];
        setProductList(products.filter(product => product.name.includes(searchQuery)));
        console.log(searchQuery);
    }

    return (
        <>
            <Router>
                <Header totalItems={totalProducts}>
                    <Cart selectedProducts={selectedProducts} totalPrice={totalPrice} />
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
                                <ProductList data={productList} onProductClicked={getSelectedProduct} />
                                <SideBar onSortData={onSortClicked} onFilterData={onFilterClicked} onSearchData={onSearchClicked} />
                            </Layout>
                        </Route>
                        <Route path="/product/:productId"><ProductDetail /></Route>
                        <Route path="*"><NotFound /></Route>
                    </Switch>
                </React.Suspense>
                <Footer />
            </Router>
        </>
    )
}

export default Main;
