import React, {useState} from 'react';

export default function Search({searchData}) {
    const [search, setSearch] = useState('');
    const handleSearchChange = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        searchData(search);
        console.log(search);
    }

    return (
        <form  onSubmit={onSubmit} className="shop-search">
            <input name="text" value={search.value} onChange={handleSearchChange} type="text" placeholder="Your keyword...." />
            <button><i className="fa fa-search" /></button>
        </form>
    )
};