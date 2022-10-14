import React from "react";
import Logo from "../src/img/logo.png"

export default function Header() {

    return(
        <div className = "imagem">
            <h1>Aula Componentes no React</h1>
            <img src = {Logo}/>            
        </div>

    )

}