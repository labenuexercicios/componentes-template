import React from "react"; // primeira coisa pra se fazer 
import Carro from "./Carro";

function Garagem() {
    return (
        <div>
            <h1>Garagem</h1>
            <Carro />
            <Carro />
            <Carro />
            <Carro />
        </div>
    )
}

export default Garagem  // exportar componente

// componenteo garagem criada