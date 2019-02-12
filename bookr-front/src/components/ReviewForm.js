import React from 'react'

class ReviewForm extends React.Component {
    constructor(props) {
        console.log(props)
        super();
        this.state = {
            ratingNumber: 0,
            review: '',
            reviewer: 'Matt',
            book_id: props.book.id
        }
    }

    render() {
        return(
            <div>
                <form>
                    <input 
                    type="text"
                    />
                </form>
            </div>
        )
    }
}

export default ReviewForm