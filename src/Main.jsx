import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductList from './components/ProductList/ProductList';
import SideBar from './components/SideBar/SideBar';
import Layout from './components/Layout/Layout';
import dataJson from './data.json';

function Main() {
    return (
        <>
            <Header />
            <Layout>
                <ProductList data={dataJson.data}/>
                <SideBar />
            </Layout>
            <Footer />
        </>
    )
}

export default Main;