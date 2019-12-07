import React, {useState} from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductList from './components/ProductList/ProductList';
import SideBar from './components/SideBar/SideBar';
import Layout from './components/Layout/Layout';
import Cart from './components/Cart/Cart';
import dataJson from './phone.json';

function Main() {
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    
    const getSelectedProduct = (product) => {
       setSelectedProducts([...selectedProducts, product]);
       setTotalPrice(totalPrice + product.final_price);
    }
   
    return (
        <>
            <Header totalItems={selectedProducts.length}>
                <Cart selectedProducts={selectedProducts} totalPrice={totalPrice}/>
            </Header>
            <Layout>
                <ProductList data={dataJson.data} onProductClicked={getSelectedProduct}/>
                <SideBar />
            </Layout>
            <Footer />
        </>
    )
}

export default Main;