import React, { useState } from 'react';
import GBSNavbar from '../GBSNavbar';
import GBSJumobtron from '../GBSJumbotron';
import SearchForm from '../SearchForm'
import Results from '../Results'
import API from '../../utils/API';


const Search = () => {
    const [formData, setFormData] = useState('');
    const [booksResult, setBooksResult] = useState([]);

    const handleInputChange = (event) => {
        setFormData(event.target.value)
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('formData', formData);
        API.searchBooks(formData).then(data => {
            console.log('search results', data.data.items);
            setBooksResult(data.data.items);
        })
        setFormData('');
    }
    return (
        <div>
            <GBSNavbar />
            <GBSJumobtron />
            <SearchForm className="m-4 p-4 border rounded-0 " onClick={handleFormSubmit} onChange={handleInputChange} value={formData} />
            <Results className="m-4 p-4  rounded-0 " books={booksResult} />

        </div>
    )
}

export default Search
