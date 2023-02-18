import React from "react"
import "./Item.css"

class Item extends React.Component {
    render() {
        return (
            <div className="Item" id={this.props.id}>
                <img src={this.props.img} alt={this.props.name} className="Item-img" />
                <h3 className="Item-Headline">{this.props.name}</h3>
                <p className="Item-price">{this.props.price}</p>
            </div>
        )
    }
}

export default Item
