import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchReviews, fetchBooks } from '../store/actions/bookAction'
import IndividualBook from '../components/IndividualBook'

class BookView extends React.Component {

    state = {
        books: {},
        reviews: []
    }


    componentDidMount() {
        this.props.fetchReviews()

        this.props.fetchBooks()
    }



    render() {
        if (this.state.books && this.state.reviews) {
        const book = this.props.books.find(book => book.id.toString() === this.props.match.params.id)
        const review = this.props.reviews.filter(review => review.books_id === book.id)
        // if (!this.props.books && !this.props.reviews) {
        //     return "No books"
        // } else {
        // if (this.props.books && this.props.reviews) {

        return (
            <IndividualBook 
            book = {book}
            review = {review}
            isFetchingReviews = {this.props.isFetchingReviews}
            fetchingBooks = {this.props.fetchingBooks}
            />
        )
        } 
    }
    }




const mapStateToProps = state => ({
    isFetchingReviews: state.reviewReducer.isFetchingReviews,
    reviews: state.reviewReducer.reviews,
    fetchingBooks: state.bookReducer.fetchingBooks,
    books: state.bookReducer.books
})

export default withRouter(connect(
    mapStateToProps,
    {
        fetchBooks,
        fetchReviews
    }
)(BookView))

