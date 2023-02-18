import "./Socmedias.css"

import instIcon from "./images/instagram.svg"
import faceIcon from "./images/facebook.svg"
import twitIcon from "./images/twitter.svg"

function Socmedias(){
    return (
        <div className="Socmedias">
            <a href="https://www.instagram.com/" className="Socmedias-item"><img src={instIcon} alt="instagram" className="Socmedias-img" /></a>
            <a href="https://uk-ua.facebook.com/" className="Socmedias-item"><img src={faceIcon} alt="facebook" className="Socmedias-img" /></a>
            <a href="https://twitter.com/" className="Socmedias-item"><img src={twitIcon} alt="twitter" className="Socmedias-img" /></a>
        </div>
    )
}

export default Socmedias