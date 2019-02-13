import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './BookItem.css'


const StyledBook = styled.div`
    color: black;
    border: 1px solid black;
    margin: 10%;
    width: auto;
    padding: 40px;
    text-align: center;
    background: white;
`

const Image = styled.img`
    width: 75%
    margin-top: 5%;
    margin-bottom: 5%;
`




const BookItem = props => {
    return(
        <Link to={`home/bookview/${props.book.id}`}>
            <StyledBook key={props.book.id}>
                <h3>{props.book.title}</h3>
                <Image src ='http://i.stack.imgur.com/071TF.jpg' alt="book"/>
                <p>By {props.book.author}</p>
            </StyledBook>
        </Link>  
    )
}

export default BookItem