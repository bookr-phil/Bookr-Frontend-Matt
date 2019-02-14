import React from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ListofBooks = styled.div`
    color: black;
`

const Image = styled.img`
    width: 30%
    margin-top: 1%;
    margin-bottom: 1%;
`

const StyledInfo = styled.div`
    text-align: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(max-width: 500px) {
        display: block;
    }
`
const Para = styled.p`
    width: 35%;
    @media(max-width: 500px) {
        width: 90%;
        text-align: right;
    }
`

const StyledHeader = styled.h1`
    font-size: 90px;
    margin-top: 2%;
    @media(max-width: 500px) {
        font-size: 55px;
    }
`

const DeleteButton = styled.button`
    border-radius: 10px;
    margin-bottom: -2%;
    margin-top: 1%;
`

const ModalDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10%;
`

const ModalButton = styled.button`
    border-radius: 10px;
    margin-right: 5%;
    background: silver;
` 

const ReviewHeader = styled.h2`
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    text-align: center;
    margin-top: 5%;
    background-color: lightgrey;
`

const SingleReview = styled.div`
    border: 1px solid black;
    margin-bottom: 3%;
    width: 40%;
    text-align: center;
    margin-left: 30%;
    margin-top:3%;
    @media(max-width: 500px) {
        width: 85%;
        margin-left: 7.5%;
    }
`

const StyledLink = styled.a`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: -3%;
`

class IndividualBook extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        }
        this.openModal = this.openModal.bind(this)
        // this.afterOpenModal = this.afterOpenModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    openModal() {
        this.setState({
            showModal: true
        })
    }

    closeModal() {
        this.setState({
            showModal: false
        })
    }

    handleDeleteBook = (id)=> {
        this.props.deleteBook(id)
    }


    render() {
        console.log(this.props)
        
        if (!this.props.book) {
            return <p>No Book</p>
        } else {
            return(
                <ListofBooks>
                    <StyledInfo>
                        {this.props.book.id > 10 && <DeleteButton onClick = {this.openModal}>Delete Book</DeleteButton>}
                        <StyledHeader>{this.props.book.title}</StyledHeader>
                        <Image src ='http://i.stack.imgur.com/071TF.jpg' alt="book"/>
                        <h5>Written by <strong>{this.props.book.author}</strong></h5>
                        <h6>Published by {this.props.book.publisher}</h6>
                        <Para>{this.props.book.summary}</Para>
                        <StyledLink href="https://www.barnesandnoble.com/">Buy Here!</StyledLink>
                    </StyledInfo>
                    <Modal
                    isOpen = {this.state.showModal}
                    // onRequestClose = {this.closeModal}
                    // className = {this.state.showModal ? '.modal' : '.close-modal'}
                    style={{
                        overlay: {
                            backgroundColor: 'white'
                        },
                        content: {
                            color: 'blue'
                        }
                    }}
                    >
                        <ModalDiv>
                            <Link to="/home"><ModalButton onClick = {this.handleDeleteBook(this.props.book.id)}>Are you sure you want to delete this book?</ModalButton></Link>
                            <ModalButton onClick = {this.closeModal}>Cancel</ModalButton> 
                        </ModalDiv>
                        
                    </Modal>
                    <ReviewHeader>Reviews</ReviewHeader>
                    {this.props.review.map((review, id) => {
                        return (
                            <SingleReview key={id}>
                                <strong><p>User: {review.reviewer}</p></strong>
                                <p>Rating: {review.rating} stars / 5 stars</p>
                                <p>Review: {review.review}</p>
                            </SingleReview>    
                        )
                    })}
                </ListofBooks>
        
                )
             }
        }
}

export default IndividualBook