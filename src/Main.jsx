import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductList from './components/ProductList/ProductList';
import SideBar from './components/SideBar/SideBar';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Layout from './components/Layout/Layout';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Cart from './components/Cart/Cart';
import dataJson from './phone.json';

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
            <Header totalItems={totalProducts}>
                <Cart selectedProducts={selectedProducts} totalPrice={totalPrice} />
            </Header>
            <Layout>
                {/* <ProductList data={productList} onProductClicked={getSelectedProduct} />
                <SideBar onSortData={onSortClicked} onFilterData={onFilterClicked} onSearchData={onSearchClicked} /> */}
                <ProductDetail />
            </Layout>
            {/* <Register />
            <Login /> */}
            <Footer />
        </>
    )
}

export default Main;
