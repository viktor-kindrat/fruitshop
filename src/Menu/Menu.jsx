import React from "react";
import "./Menu.css"

class Menu extends React.Component {
    render(){
        return (
            <div className="Menu">
                <span className="Menu-item">Home</span>
                <span className="Menu-item">Banana</span>
                <span className="Menu-item">Apple</span>
                <span className="Menu-item">Pear</span>
            </div>
        )
    }
}

export default Menu