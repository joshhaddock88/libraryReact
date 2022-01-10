import React from 'react';
import { Card } from 'react-bootstrap';

const Books = ({books}) => {
    const bookList = books.map(book => {
        return(
            <div className="book">
            <Card>
                <Card.Img src='url' alt=''/>
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                        Author: {book.author}
                        <br/>
                        Length: {book.pages}
                        <br/>
                        Read: {book.haveRead}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        );
    })
    return(
        <div>
            { bookList }
        </div>
    )
}

export default Books;