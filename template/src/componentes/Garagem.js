import React from "react"
import { Carro } from "./Carro"

export default function Garagem() {
    const nome = "Bruno"
    return (
        <>
        <h1>Garagem do {nome}</h1>
        <Carro/>
        <Carro/>
        <Carro/>
        <Carro/>
        </>
    )
}