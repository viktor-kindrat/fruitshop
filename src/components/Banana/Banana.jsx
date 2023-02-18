import React from "react"

import "./Banana.css"
import Item from "../Item/Item"
import bananaData from "../../data/banana.json"

class Banana extends React.Component {
    render(){
        return (
            <section className="Banana">
                <h2 className="Banana-headline">Banana</h2>
                <div className="Banana-container">
                    {
                        bananaData.map(item=>
                            <Item name={item.name} img={item.img} price={item.price}/>
                        )
                    }
                </div>
            </section>
        )
    }
}

export default Banana