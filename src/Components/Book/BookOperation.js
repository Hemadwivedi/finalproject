import React from "react";
import {Link} from "react-router-dom";

const bookOperation = (props) => {
    return (
        <div>
            {props.isNotOwn ?
                (<button onClick={props.addToCart}>Add to cart</button>)
                :
                (
                    <button className="test">
                        <Link to={{
                            pathname: "/addBook",
                            state: {
                                bookId: props.bookId
                            }
                        }}>Edit</Link>
                    </button>
                )
            }
        </div>
    )

};

export default bookOperation