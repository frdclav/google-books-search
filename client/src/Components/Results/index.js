import React, { useState, useEffect } from 'react'
import ResultCard from '../ResultCard'
import { Button } from 'reactstrap'
import API from '../../utils/API'

const Results = (props) => {
    const [bookList, setBookList] = useState(props.books)

    useEffect(() => {

        setBookList(props.books);

    })
    const saveBookResult = (bookData) => {
        API.saveBook(bookData)
    }
    const deleteBookResult = (id) => {
        API.deleteBook(id).then(data => setBookList())
    }

    return (
        <div {...props}>
            <h3>Book Results</h3>
            {(bookList) ?
                bookList.map((book, index) => {
                    console.log('book', book)
                    const dataThing = {
                        btn1: <a href={book.link}><Button className="m-1">View</Button></a>,
                        btn2: <Button className="m-1" onClick={(props.page === `search`) ? () => saveBookResult({
                            title: book.title,
                            authors: book.authors,
                            description: book.description,
                            image: book.image,
                            link: book.link,
                            subtitle: book.subtitle,
                        }) : () => deleteBookResult(book._id)}>{(props.page === `search`) ? 'Save' : 'Delete'}</Button>,
                        title: book.title,
                        subtitle: book.subtitle,
                        authors: book.authors,
                        image: book.image,
                        description: book.description ? book.description : ''
                    }
                    console.log(dataThing);
                    return (<ResultCard key={index} data={dataThing} />)

                }) : ''
            }

        </div >
    )
}

export default Results
