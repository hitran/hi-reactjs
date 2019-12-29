import React from 'react';

export default function Sort(props) {
    const SORT_A_TO_Z = "Sort A to Z";
    const SORT_Z_TO_A = "Sort Z to A";
    const SORT_HIGH_TO_LOW = "Sort high to low";
    const SORT_LOW_TO_HIGH = "Sort low to high";
    const SORT_TOP_SALE = "Sort Top Sales";


    const sort = (type) => {
        const productList = props.data;
        switch(type) {
            case SORT_A_TO_Z:
                props.getProductListBySort(sortAToZ(productList));
                break;
            case SORT_Z_TO_A:
                props.getProductListBySort(sortZToA(productList));
                break;
            case SORT_HIGH_TO_LOW:
                props.getProductListBySort(sortHighToLow(productList));
                break;
            case SORT_LOW_TO_HIGH:
                props.getProductListBySort(sortLowToHigh(productList));
                break;
        }
    }

    const sortAToZ = (list) => {
        list.sort((a, b) => {
            if (a.name > b.name) {
                return -1;
            } else if (a.name < b.name) {
                return 1;
            }
            return 0;
        })
        return list
    }

    const sortZToA = (list) => {
        list.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            } else if (a.name > b.name) {
                return 1;
            }
            return 0;
        })
        return list;
    }

    const sortHighToLow = (list) => {
        list.sort((a, b) => b.final_price - a.final_price);
        return list;
    }

    const sortLowToHigh = (list) => {
        list.sort((a, b) => a.final_price - b.final_price);
        return list;
    }

    return (
        <ul className="shop-link">
            <li><a onClick={()=> sort(SORT_A_TO_Z)}>Name: A-Z</a></li>
            <li><a onClick={()=> sort(SORT_Z_TO_A)}>Name: Z-A</a></li>
            <li><a onClick={()=> sort(SORT_HIGH_TO_LOW)}>Price: High to Low</a></li>
            <li><a onClick={()=> sort(SORT_LOW_TO_HIGH)}>Price: Low to High</a></li>
            <li><a href="#">Product: Top Sales</a></li>
        </ul>
    )
}