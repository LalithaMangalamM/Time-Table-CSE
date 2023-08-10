import "./logo.css"
import logo from "../../asstes/solution 1.png"

let  Logo = () => {
    return(
        <div className="logo-container">
            <img className="logo" src={logo} alt="logo" />
            <p className="name">TABLEFIT</p>
        </div>
    )
}

export default Logo;