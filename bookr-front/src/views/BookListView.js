import React from 'react'
import { connect } from 'react-redux'
import {  withRouter } from 'react-router-dom'
import { fetchBooks } from '../store/actions/bookAction'
import ListOfBooks from '../components/ListOfBooks'


class BookListView extends React.Component {
    componentDidMount() {
        this.props.fetchBooks()
    }

    render() {
        // console.log(this.props)
        // if (!localStorage.token) {
        //     this.props.history.push('/login')
        // } 
        return (
            <div>
                <ListOfBooks {...this.props} books={this.props.books}/>
            </div>
        )   
    }
}

const mapStateToProps = state => ({
    fetchingBooks: state.bookReducer.fetchingBooks,
    books: state.bookReducer.books
})

export default withRouter(connect(
    mapStateToProps,
    { fetchBooks }
)(BookListView))