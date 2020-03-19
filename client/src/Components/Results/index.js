import React from 'react'
import ResultCard from '../ResultCard'
import { Button } from 'reactstrap'

const Results = (props) => {
    const checkIfExists = (thingToCheck) => {
        return thingToCheck ? thingToCheck : ''
    }
    return (
        <div {...props}>
            <h3>Book Results</h3>
            {props.books.map((book, index) => {

                const dataThing = {
                    btn1: <a href={book.volumeInfo.infoLink}><Button className="m-1">View</Button></a>,
                    btn2: <Button className="m-1" onClick={() => console.log('clicked Save!')}>Save</Button>,
                    title: book.volumeInfo.title,
                    subtitle: book.volumeInfo.subtitle,
                    authors: book.volumeInfo.authors,
                    image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : `https://via.placeholder.com/150` : `https://via.placeholder.com/150`,
                    description: book.volumeInfo.description ? book.volumeInfo.description : ''
                }
                console.log(dataThing);
                return (<ResultCard key={index} data={dataThing} />)
            })}

        </div >
    )
}

export default Results
