import React from 'react';
import RemoveItem from "./RemoveItem";

const cartItem = (props) => {
    return (<div className="card-deck">
                <div className="card">
                    <img className="card-img-top" src={props.jpegImg} alt="bookImage"/>
                    <div className="card-body">
                        <h4 className="card-title">{props.title}</h4>
                        <p className="card-text">By: {props.author}</p>
                        <p className="card-text">{props.description}</p>
                        <p className="price-text">Price: {props.price}</p>
                        <RemoveItem click={props.deleteFromCart}/>
                    </div>
                </div>
            </div>
        )
};

export default cartItem;