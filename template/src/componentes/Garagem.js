import React from "react"
import { Carro } from "./Carro"

export default function Garagem () {
    const nome = "Thamiris"
    return (
        <>
        <h1>Garagem da {nome}
        </h1>
        <Carro/>
        <Carro/>
        <Carro/>
        <Carro/>
        </>
    )
}