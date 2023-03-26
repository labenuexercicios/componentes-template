import React from "react"
import Carro from './Carro'
 
function Garagem(){
    const nome = "Emerson Dantas"
    return (
        <div className="garagem">
            <h1>Garagem de {nome} </h1>
            <Carro/>
            <Carro/>
            <Carro/>
        </div>
    )
}
export default Garagem;