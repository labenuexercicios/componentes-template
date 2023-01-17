import React from "react"

import Logo from "../img/logo.png";


export function Header() {


    return(
        <div className="Header">
            <h1>
                <img src= {Logo}/>
            </h1>
        </div>
    )
}