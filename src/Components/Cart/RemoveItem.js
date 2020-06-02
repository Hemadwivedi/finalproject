import React from 'react';


const removeItem = (props) => {
    return (
        <div>
            <input name="delete" className="btn submit-btn deleteFromCart"
                   value="REMOVE" onClick={props.click}/>
        </div>
    )
};

export default removeItem;