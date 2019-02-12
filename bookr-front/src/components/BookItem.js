import React from 'react'
import { Link } from 'react-router-dom'

const BookItem = props => {
    console.log(props)
    return(
        <Link to={`/bookview/${props.book.id}`}>
            <div key={props.book.id}>
                <h3>{props.book.title}</h3>
                <p>By {props.book.author}</p>
            </div>
        </Link>  
    )
}

export default BookItem