import React from 'react'
import BookItem from './BookItem'
import styled from 'styled-components'

const Books = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: baseline;
    width: 90%;
    border: 1px solid black;
    margin: 0 auto;
    margin-bottom: 5%;
    background: cornsilk;
`

const SubHeader = styled.h2`
    text-align: center;
    font-size: 50px;
    margin-top: 2%;
    margin-bottom: 2%;
    border-bottom: 1px solid black;
    width: 80%;
    margin-left: 10%;
    padding-bottom: 1%;
`

const ListOfBooks = (props, id) => {
    return(
        <div>
            <SubHeader>Books We Offer!</SubHeader>
            <Books key={id}>
                {props.books.map(book => {
                    return (
                      <BookItem book={book}/>
                 )
                })}
            </Books>
        </div>
        
    )
    
}

export default ListOfBooks