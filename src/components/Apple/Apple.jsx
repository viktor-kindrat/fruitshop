import React from "react"
import "./Apple.css"
import Item from "../Item/Item"
import appleData from "../../data/apple.json"

class Apple extends React.Component {
    render(){
        return (
            <section className="Apple">
                <h2 className="Apple-headline">Apple</h2>
                <div className="Apple-container">
                    {
                        appleData.map(item=>
                            <Item name={item.name} img={item.img} price={item.price}/>
                        )
                    }
                </div>
            </section>
        )
    }
}

export default Apple