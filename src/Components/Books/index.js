import React, { Component } from 'react';
import "./style.css";
import axios from 'axios';

class Books extends Component {
constructor(){
    super();
    this.state = {
        name: '',
        jpegIMG: '',
        title: '',
        author: '',
        description:'',
        price: ''
    }
}

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const books = res.data;
                this.setState({ books });
            })
    }

//route folder
//book routes
//api/book
//look at employee
    render() {
        return ( <div className = "card" >
            <div className = "img-container" >
                <img alt = { this.state.name } src = { this.state.jpegImg } /> 
            </div> 
            <div className = "content" >
                <ul>
                <li><strong > { this.state.title } </strong></li> 
                <li><strong > By: </strong> {this.state.author}</li> 
                <li> { this.state.description } </li> 
                <li><strong > Price: </strong> {this.state.price} </li> 
                </ul> 
            </div> 
            <span onClick = {() => this.state.addToCart(this.state.id) } >
            <Button variant = "warning" > Add to Cart </Button>{' '} 
            </span> 
            </div>
        );
    }
}

export default Books;


//add an addToCart method to the App.js
//import Books from "./components/Books";
//render the card to page
//component, mount, create axios, take one, then renderid (take response)
//look at App.js