import React, { Component } from 'react';

import BrowseBookFunction from "./BrowseBookFunction";


class BrowseBook extends Component {
    constructor(props){
        super(props);
        this.state = {
           loadPost:[]
        }

    }
    componentDidMount() {
        BrowseBookFunction().then(response=>{
            console.log("Search Response: " + response)
            this.setState({
                loadPost: response.data
            })
        })
    }


    render() {
        return this.state.loadPost.map(post=> {
            return ( <div className = "card" >
                    <div className = "img-container" >
                        <img alt={post.name} src = { post.jpegImg } />
                    </div>
                    <div className = "content" >
                        <ul>
                            <li><strong > { post.title } </strong></li>
                            <li><strong > By: </strong> {post.author}</li>
                            <li> { post.description } </li>
                            <li><strong > Price: </strong> {post.price} </li>
                        </ul>
                    </div>

                    <button variant = "warning"> Add to Cart </button >

                </div>
            );
        });
    }
}

export default BrowseBook;
