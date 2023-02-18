import "./Main.css"
import Home from "../Home/Home"
import Banana from "../Banana/Banana"
import Apple from "../Apple/Apple"
import Pear from "../Pear/Pear"

function Main(){
    return (
        <main className="Main">
            <Home/>
            <Banana/>
            <Apple/>
            <Pear/>
        </main>
    )
}

export default Main