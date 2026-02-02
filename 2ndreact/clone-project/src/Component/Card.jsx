import React from 'react'
import './Card.css'
const Card = (props) => {
    return (
        <div>
            <div className="card1">
                <h1>{props.title}</h1>
                <img className="img1" src={props.image} alt="image" />
                <p className="desc">Description </p>
            </div>
        </div>


    )
}

export default Card