import React from 'react';
import BookOperation from  "./BookOperation"

const book = (props) => {
   return (<div className="card-deck">
        <div className="card">
            <img className="card-img-top" src={props.jpegImg} alt=""/>
            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">By: {props.author}</p>
                <p className="card-text">{props.description}}</p>
                <p className="price-text">Price: {props.price}}</p>
                <BookOperation addToCart={props.addToCart} bookId={props.bookId} isNotOwn={props.isNotOwn}/>
            </div>
        </div>
    </div>)



}

export default book;