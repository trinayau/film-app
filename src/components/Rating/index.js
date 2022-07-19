import React from 'react'
const Rating = ({rating}) => {
    const numericRating = parseInt(rating);

    if(rating !== null && rating > 0) {

        return <p className="ratingStars">{" ⭐️ ".repeat(numericRating)}{numericRating}/10</p>
        // <h5 className='ratingStars'>{[...Array(numericRating)].map(i=> <span> ⭐️ </span>)}</h5>
       

    } else {
        return <p>No rating available (probably bad)</p>
    }
    return 
}
 
export default Rating;
