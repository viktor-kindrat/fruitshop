import "./Header.css"

import phoneIcon from "./images/phone.svg"
import Socmedias from "../Socmedias/Socmedias"
import Logo from "../Logo/Logo"

function Header(){
    return (
        <header className="Header">
            <div className="Header-row">
                <Socmedias/>
                <Logo/>
                <a className="Header-contact" href="tel:+380981234546">
                    <img src={phoneIcon} alt="phone" />
                    +380981234546
                </a>
            </div>
            <div className="Header-separator"></div>
            <div className="Header-row">
                <span className="Header-navitem"> Home </span>
                <span className="Header-navitem"> Banana </span>
                <span className="Header-navitem"> Aplle </span>
                <span className="Header-navitem"> Pear </span>
                <span className="Header-navitem"> Contact us </span>
            </div>
        </header>
    )
}

export default Header