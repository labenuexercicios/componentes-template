import React from "react";
import  Carro from "./Carro";

export default function Garagem(props) {
    return (
        <>
            <h1> Garagem de {props.nomeGaragem}</h1>

            <button onClick={() => props.apresentaGaragem(props.nomeGaragem)}>Apresentar Garagem </button>
            <Carro carro={props.carro1} />
            <Carro carro={props.carro2} />  
            <Carro carro={props.carro3} />
            <Carro carro={props.carro4} />

        </>

    );
}