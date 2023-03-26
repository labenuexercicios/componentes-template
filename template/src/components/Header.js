import React from "react"
import logo from "../img/logo.png"
 
const Header=()=>{
    return (
        <div className="header">
            <h1>Componentes Header</h1>
            <img src={logo} className="labe-logo" alt="logo" />
        </div>
    )
}
export default Header;