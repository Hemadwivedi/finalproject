import React, {Component} from "react";
import './Book.css'

class BrowseBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            userId: null,
            username:null
        };
    }


    render() {
        return (

            <div className="imageandwelcome">
                 hello !!!
            </div>
        )

    }
}
export  default BrowseBook;