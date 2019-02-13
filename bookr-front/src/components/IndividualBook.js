import React from 'react'

const IndividualBook = props => {
    

    if (!props.book) {
        return <p>No Book</p>
    } else {
    return(
        <div>
            <div>
                {props.book.title ? <h3>{props.book.title}</h3> : "No book"}
                <h5>{props.book.author}</h5>
                <p>{props.book.summary}</p>
            </div>
            {props.review.map(review => {
                return (
                    <div>
                        <p>User: {review.reviewer}</p>
                        <p>Rating: {review.rating} stars / 5 stars</p>
                        <p>Review: {review.review}</p>
                    </div>    
                )
            })}
        </div>
        
    )
    }
}

export default IndividualBook