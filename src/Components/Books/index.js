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
           axios.get('/:bookId')
           .then(res => {
            this.setState({name: res.data.name,
            jpegIMG: res.data.jpegIMG,
            title: res.data.title,
            author: res.data.author,
            description: res.data.description,
            price: res.data.price})
            })
            .catch(err => console.log(err))
            }
        }

    render() {
        return ( 
        <div className = "card" >
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

            </div>
        );
    }
}

export default Books;




