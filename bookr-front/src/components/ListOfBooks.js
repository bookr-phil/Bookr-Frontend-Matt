import React from 'react'
import BookItem from './BookItem'

const ListOfBooks = (props, id) => {
    return(
        <div key={id}>
            {props.books.map(book => {
                return (
                    <BookItem book={book}/>
                )
            })}
        </div>
    )
    
}

export default ListOfBooks