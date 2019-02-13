import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchReviews, fetchBooks, addReview, deleteBook } from '../store/actions/bookAction'
import IndividualBook from '../components/IndividualBook'
import ReviewForm from '../components/ReviewForm'

class BookView extends React.Component {

    componentDidMount() {
        this.props.fetchBooks()
        this.props.fetchReviews()
    }



    render() {
            if (this.props.books.length > 0 && this.props.reviews.length > 0) {
            const book = this.props.books.find(book => book.id.toString() === this.props.match.params.id)
            const review = this.props.reviews.filter(review => review.books_id === book.id)
            // if (!this.props.books && !this.props.reviews) {
            //     return "No books"
            // } else {
            // if (this.props.books && this.props.reviews) {
                return (
                    <div>
                        <IndividualBook 
                        book = {book}
                        review = {review}
                        isFetchingReviews = {this.props.isFetchingReviews}
                        fetchingBooks = {this.props.fetchingBooks}
                        deleteBook = {this.props.deleteBook}
                        />
                        <ReviewForm 
                        book = {book}
                        review = {review}
                        addReview = {this.props.addReview}
                        />
                    </div>
                    
                )
            } else {
                return <p>Loading...</p>
            }
        }
    }




const mapStateToProps = state => ({
    isFetchingReviews: state.reviewReducer.isFetchingReviews,
    reviews: state.reviewReducer.reviews,
    fetchingBooks: state.bookReducer.fetchingBooks,
    books: state.bookReducer.books,
    isPostingReview: state.reviewReducer.isPostingReview
})

export default withRouter(connect(
    mapStateToProps,
    {
        fetchBooks,
        fetchReviews,
        addReview,
        deleteBook
    }
)(BookView))

