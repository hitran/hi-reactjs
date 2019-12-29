import React, {useState} from 'react';

export default function Search(props) {
    const [search, setSearch] = useState("");
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        let searchQuery = search.toLowerCase();
        const splittedQuery = searchQuery.split(" ");
        searchQuery = splittedQuery.join("-");
        props.getProductListBySearch(searchQuery);
    }

    return (
        <form  onSubmit={onSubmit} className="shop-search">
            <input name="text" value={search.value} onChange={handleSearchChange} type="text" placeholder="Your keyword...." />
            <button><i className="fa fa-search" /></button>
        </form>
    )
};