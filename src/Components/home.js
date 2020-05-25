import React, { Component } from 'react'

class Home extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <div className="membercontent">
                    <div className="imageandwelcome">
                        <img src="/assets/images/welcome.png"
                             className="girlreading"/>
                            <h3 className="welcometext">Welcome</h3>
                    </div>
                    <div className="choices">
                        <h5>Would you like to add a book to sell or search through our library of books?</h5>
                        <input name="addbook" id="addbook" className="btn add-btn" value="Add a Book"/>
                            <input name="browsebook" id="browsebook" className="btn browsebook-btn"
                                   value="Browse Library"/>
                    </div>
                </div>
            </div>
        )
    }


}
export default Home


