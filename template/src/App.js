import React from "react";
import "./App.css";
import Header from "./components/Header";
import Garagem from "./components/Garagem";
import Footer from "./components/Footer";
import "./styles.css";


export default function App() {
  const nome = "Raissa";
  const nome2 = "Lili";

  function apresentaGaragem(nome) {
    alert(`Boas vindas a garagem de ${nome}`);
  }

  const carro = {
    modelo: "Fusca",
    cor: "azul",
    ano: 1974,
    flex: "não"
  };

  const carro2 = {
    modelo: "Kombi",
    cor: "verde",
    ano: 1994,
    flex: "não"
  };

  const carro3 = {
    modelo: "Variante",
    cor: "amarelo",
    ano: 1972,
    flex: "não"
  };

  const carro4 = {
    modelo: "ka",
    cor: "cinza",
    ano: 1964,
    flex: "sim"
  };

  const carro5 = {
    modelo: "Corola",
    cor: "azul",
    ano: 2000,
    flex: "sim"
  };

  return (
    <div className="App">
      <Garagem
        nomeGaragem={nome}
        apresentaGaragem={apresentaGaragem}
        carro1={carro}
        carro2={carro2}
        carro3={carro3}
        carro4={carro4}
      />

      <Garagem
        nomeGaragem={nome2}
        apresentaGaragem={apresentaGaragem}
        carro1={carro2}
        carro2={carro5}
        carro3={carro3}
        carro4={carro4}
      />
    </div>
  );
}
