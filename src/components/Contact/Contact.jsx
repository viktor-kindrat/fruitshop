import React from "react";
import "./Contact.css"

class Contact extends React.Component {
    render (){
        return (
            <div className="Contact">
                <h2 className="Contact-headline">Contact us</h2>
                <textarea className="Contact-area" name="message" id="message" cols="30" rows="10"></textarea>
                <button className="Contact-btn">Send</button>
            </div>
        )
    }
}
export default Contact