import React from "react"

export function Carro (){
    const nomeCarro = "Renault Sandero"
    let cor = "cinza"
    let ano = 2012
    return (
<>
<h2>{nomeCarro}</h2>
<ul>
<li>Cor: {cor}</li>
<li>Ano: {ano}</li>
<li>Flex:sim</li>
</ul>
</>
    )
}