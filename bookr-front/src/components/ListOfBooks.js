import React from 'react'

const ListOfBooks = (props, id) => {
    return(
        <div key={id}>
            {props.books.map(book => {
                return (
                    <div>
                        <h3>{book.title}</h3>
                    </div>
                )
            })}
        </div>
    )
    
}

export default ListOfBooks