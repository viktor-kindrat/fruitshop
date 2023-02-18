import "./Socmedias.css"

import instIcon from "./images/instagram.svg"
import faceIcon from "./images/facebook.svg"
import twitIcon from "./images/twitter.svg"

function Socmedias(){
    return (
        <div className="Socmedias">
            <a href="#" className="Socmedias-item"><img src={instIcon} alt="instagram" className="Socmedias-img" /></a>
            <a href="#" className="Socmedias-item"><img src={faceIcon} alt="instagram" className="Socmedias-img" /></a>
            <a href="#" className="Socmedias-item"><img src={twitIcon} alt="instagram" className="Socmedias-img" /></a>
        </div>
    )
}

export default Socmedias