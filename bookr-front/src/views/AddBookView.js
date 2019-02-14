import React from 'react'
import { connect } from 'react-redux'
import {  withRouter } from 'react-router-dom'
import { addBook } from '../store/actions/bookAction'
import { store } from '../index'
import styled from 'styled-components'

const StyledHeader = styled.div`
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    margin-top: 5%;
    margin-bottom: 5%;
    border-bottom: 1px solid black;
    padding-bottom: 3%;
    width: 80%;
    margin-left: 10%;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 15%;
`
const StyledInput = styled.input`
    width: 50%
    padding: .5%;
    font-size: 20px;
    margin-bottom: 1.5%;
`

const StyledButton = styled.button`
    width: 200px;
    padding-top: .5%;
    padding-bottom: .5%;
    border-radius: 10px;
    background: #907163;
    color: white;
    font-weight: bold;
`

class AddBookView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookInfo: {
                title: '',
                author: '',
                publisher: '',
            }
        }
    }

    handleChanges = e => {
        e.preventDefault()
        this.setState({
            bookInfo: {
                ...this.state.bookInfo,
                [e.target.name]: e.target.value
            }
        })
    }

    sumbitBook = e => {
        e.preventDefault()
        this.props.addBook(this.state.bookInfo)
        this.setState({
            bookInfo: {
                title: '',
                author: '',
                publisher: ''
            }
        })
    }



    render() {
        console.log(this.props)
        return(
            <div>
                <StyledHeader>Add a New Book</StyledHeader>
                <StyledForm onSubmit={this.sumbitBook}>
                    <StyledInput 
                    type="text"
                    name="title"
                    placeholder="enter title"
                    value={this.state.bookInfo.title}
                    onChange={this.handleChanges}
                    />
                    <StyledInput 
                    type="text"
                    name="author"
                    placeholder="enter author"
                    value={this.state.bookInfo.author}
                    onChange={this.handleChanges}
                    />
                    <StyledInput 
                    type="text"
                    name="publisher"
                    placeholder="enter publisher"
                    value={this.state.bookInfo.publisher}
                    onChange={this.handleChanges}
                    />
                    <StyledButton type="submit">Submit New Book</StyledButton>
                </StyledForm>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    addingBooks: state.bookReducer.addingBooks,
    books: state.bookReducer.books,
    error: state.bookReducer.error
})

export default withRouter(connect(
    mapStateToProps,
    {
        addBook,
        store
    }
)(AddBookView))