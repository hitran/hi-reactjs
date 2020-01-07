import React from 'react';
import Search from '../Search/Search.Container';
import Sort from '../Sort/Sort.Container';

function SideBar({ onSortData, onFilterData, onSearchData }) {
    const handleSortClick = (sortType) => {
        onSortData(sortType);
    }

    const handleFilterClick = () => {
        onFilterData();
    }
    return (
        <div className="col-xl-3 col-lg-4">
            <div className="sidebar-shop">
                <div className="shop-widget">
                    <h3 className="shop-title">Search by</h3>
                    <Search searchData={onSearchData} />
                </div>

                <div className="shop-widget">
                    <h3 className="shop-title">SHOP BY</h3>
                    <Sort />
                </div>
                <div className="shop-widget">
                    <h3 className="shop-title">Recent Product</h3>
                    <ul className="shop-sidebar-product">
                        <li>
                            <div className="side-pro-img">
                                <a href="#"><img src="./assets/shop-rsp3.jpg" alt="" /></a>
                            </div>
                            <div className="side-pro-content">
                                <div className="side-pro-rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                                <h5><a href="#">Raglan Baseball-Style</a></h5>
                                <div className="side-pro-price">
                                    <span>$119.00 USD</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="side-pro-img">
                                <a href="#"><img src="./assets/shop-rsp2.jpg" alt="" /></a>
                            </div>
                            <div className="side-pro-content">
                                <div className="side-pro-rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                                <h5><a href="#">Raglan Baseball-Style</a></h5>
                                <div className="side-pro-price">
                                    <span>$119.00 USD</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="side-pro-img">
                                <a href="#"><img src="./assets/shop-rsp4.jpg" alt="" /></a>
                            </div>
                            <div className="side-pro-content">
                                <div className="side-pro-rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                                <h5><a href="#">Raglan Baseball-Style</a></h5>
                                <div className="side-pro-price">
                                    <span>$119.00 USD</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="shop-widget">
                    <div className="shop-sidebar-banner">
                        <a href="#"><img src="./assets/shop-banner.jpg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;