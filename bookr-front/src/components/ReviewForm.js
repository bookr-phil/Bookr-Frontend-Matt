import React from 'react'

class ReviewForm extends React.Component {
    constructor(props) {
        console.log(props)
        super();
        this.state = {
            rating: 0,
            review: '',
            reviewer: 'Matt',
            book_id: props.book.id
        }
    }

    handleChanges = e => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleRating = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleAddReview = e => {
        e.preventDefault()
        const reviewInfo = {
            review: this.state.review,
            rating: this.state.rating,
            reviewer: this.state.reviewer,
            books_id: this.state.book_id
        }
        this.props.addReview(reviewInfo)
        this.setState({
            ratingNumber: 0,
            review: '',
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleAddReview}>
                    <input 
                    type="text"
                    name='review'
                    value={this.state.review}
                    onChange={this.handleChanges}
                    />
                    <input 
                    type="number"
                    value={this.state.rating}
                    name="rating"
                    onChange={this.handleRating}
                    min="1"
                    max="5"
                    />
                    <button type="submit">Submit Review</button>
                </form>
            </div>
        )
    }
}

export default ReviewForm