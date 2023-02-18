import React from "react";
import "./Info.css"
import Socmedias from "../Socmedias/Socmedias"

class Info extends React.Component {
    render(){
        return (
            <div className="Info">
                <h2 className="Info-headline">Information</h2>
                <div className="Info-row">
                    <span className="Info-item">+380981234567</span>
                    <span className="Info-item">conact@fruit.com</span>
                </div>
                <Socmedias/>
            </div>
        )
    }
}

export default Info