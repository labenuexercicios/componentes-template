import React from "react";
import Carro from "./Carro";



export default function Garagem (){ // o nome da função tem que começar com CAPS para o react entender que é um componente. 
    return (
        
        <div>
           <h1> Garagem do Túlio </h1>
                <Carro/>
                <Carro/>
                <Carro/>
                <Carro/>
        </div>
    )
}