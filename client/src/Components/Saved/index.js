import React, { useState, useEffect } from 'react';
import GBSNavbar from '../GBSNavbar';
import GBSJumobtron from '../GBSJumbotron';
import Results from '../Results';
import API from '../../utils/API';
const Saved = () => {
    const [booksResult, setBooksResult] = useState();

    useEffect(() => {

        API.getBooks().then(data => {
            setBooksResult(data.data);
        })
    })

    return (
        <div>
            <GBSNavbar />
            <GBSJumobtron />
            <Results className="m-4 p-4  rounded-0 " books={booksResult} />
        </div>
    )
}

export default Saved
