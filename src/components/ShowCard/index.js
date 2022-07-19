import React from "react";
import { useNavigate } from "react-router-dom";
import {Rating} from '../'

const ShowCard = ({ name, summary, image, rating}) => {

    const navigate = useNavigate();
 

    function handleClick() {
        navigate(-1);
    }
    return (
        <article className="show-card">
        <img src={image !== null ? image.medium: "https://http.cat/404"} alt={`image of ${name}`}></img>
        <Rating rating={rating.average}/>

        <h1>{name}</h1>
        <div dangerouslySetInnerHTML={{__html: summary}}></div>
        <button onClick={handleClick}>Back</button>  
        </article>
    )

}

export default ShowCard;
