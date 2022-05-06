import React from 'react';

const Rating = ({ rating }) => {

    const numericRating = parseInt(rating);

    if (rating !== null && numericRating > 0) {
        
        return <p>{"⭐".repeat(numericRating) + "☆".repeat(10 - numericRating)}</p>
    } else {
    
        return <p>No rating available (probably bad)</p>
    
    }

}

export default Rating;