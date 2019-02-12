import React from 'react'

const BookItem = props => {
    console.log(props)
    return(
        <div key={props.book.id}>
            <h3>{props.book.title}</h3>
             <p>By {props.book.author}</p>
        </div>
    )
}

export default BookItem