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
            const searchResults = data.data.items
            const searchResultsCleaned = []
            searchResults.map(item => {
                const newItem = {
                    link: item.volumeInfo.infoLink,
                    title: item.volumeInfo.title,
                    authors: item.volumeInfo.authors,
                    description: item.volumeInfo.description,
                    image: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail ? item.volumeInfo.imageLinks.thumbnail : `https://via.placeholder.com/150` : `https://via.placeholder.com/150`,
                    subtitle: item.volumeInfo.subtitle
                }
                console.log(newItem)
                searchResultsCleaned.push(newItem)
            })

            setBooksResult(searchResultsCleaned);
        })
        setFormData('');
    }
    return (
        <div>
            <GBSNavbar />
            <GBSJumobtron />
            <SearchForm className="m-4 p-4 border rounded-0 " onClick={handleFormSubmit} onChange={handleInputChange} value={formData} />
            <Results className="m-4 p-4  rounded-0 " books={booksResult} page={`search`} />

        </div>
    )
}

export default Search
