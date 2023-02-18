import React from "react"

import "./Home.css"
import mainImage from "./images/fruitmix.png"


class Home extends React.Component {
    render() {
        return (
            <section className="Home">
                <img src={mainImage} alt="fruit mix" className="Home-img" />
                <h1 className="Home-headline">
                    Mix your fresh of fruits <br />
                    with <span className="Home-green-text">Fruit Shop</span>
                </h1>
            </section>
        )
    }
}

export default Home