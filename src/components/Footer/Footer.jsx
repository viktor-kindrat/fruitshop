import React from "react";
import "./Footer.css"
import Menu from "../../Menu/Menu";
import Contact from "../Contact/Contact";
import Info from "../Info/Info";

class Footer extends React.Component {
    render(){
        return(
            <footer className="Footer">
                <Menu/>
                <Contact/>
                <Info/>
            </footer>
        )
    }
}

export default Footer