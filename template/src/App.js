import React from "react";
import "./App.css";
import { Footer } from "./componentes/Footer";
import {Main} from "./componentes/Main";
import {Header} from "./componentes/Header";
import { RedesSociais } from "./componentes/RedesSociais";
import { Copywrite } from "./componentes/Copywrite";
import {Carro} from "./componentes/Carro"
import {Garagem} from "./componentes/Garagem"

export default function App() {  

  return (
    
    <div className="App">
        <h1>Aula - Componentes React</h1>
       <Header />
     <Main />
     <Footer/>
    </div>
  );
}
