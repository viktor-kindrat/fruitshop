import React from "react";
import "./Pear.css"
import Item from "../Item/Item";

import pearData from "../../data/pear.json"

class Pear extends React.Component {
    render(){
        return(
            <section className="Pear">
                <h2 className="Pear-headline">Pear</h2>
                <div className="Pear-container">
                    {
                        pearData.map(item=>
                            <Item name={item.name} img={item.img} price={item.price}/>
                        )
                    }
                </div>
            </section>
        )
    }
}
export default Pear