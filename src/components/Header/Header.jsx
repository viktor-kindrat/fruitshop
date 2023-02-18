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
        </header>
    )
}

export default Header