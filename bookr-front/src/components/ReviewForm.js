import React from 'react'
import styled from 'styled-components'

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10%;
    @media(max-width: 500px) {
        display: block;
    }
`
const StyledForm = styled.form`
    display: flex;
    justify-content: center;
    @media(max-width: 500px) {
        display: block;
    }
`
const FormButton = styled.button`
    width: 30%;
    margin-left: 5%;
    border-radius: 10px;
    background: #907163;
    color: white;
    font-weight: bold;
    @media(max-width: 500px) {
        margin-left: 35%;
    }
`

const InputField = styled.input`
    margin-right: 10%;
    margin-bottom: 3%;
    @media(max-width: 500px) {
        width: 85%;
        margin-left: 7.5%;
    }
`

const StyledSub = styled.h2`
    text-align: center;
    margin-bottom: 2%;
    border-bottom: 1px solid black;
    padding-bottom: 2%;
    width: 80%;
    margin-left: 10%;
`

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
        this.setTimeout((window.location.reload()),500)
    }

    render() {
        return(
            <div>
                <StyledSub>Add a Review</StyledSub>
                <FormContainer>
                    <StyledForm onSubmit={this.handleAddReview}>
                        <div>
                            <InputField 
                            type="text"
                            name='review'
                            value={this.state.review}
                            onChange={this.handleChanges}
                            size='50'
                            placeholder="Enter Review"
                            />
                            <InputField 
                            type="number"
                            value={this.state.rating}
                            name="rating"
                            onChange={this.handleRating}
                            min="1"
                            max="5"
                            />
                        </div> 
                        <FormButton type="submit">Submit Review</FormButton>
                    </StyledForm>
                </FormContainer>
            </div>

        )
    }
}

export default ReviewForm