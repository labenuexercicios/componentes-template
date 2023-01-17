import React from "react";
import "./App.css";
// import {Garagem} from "./Componentes/Garagem";
import { Header } from "./Componentes/Header";

export default function App() {
  

  return (
    <div className="App">
      <Header/>


     <h1>Aula - Componentes React</h1>
    {/* <Garagem/> */}

     <div>
      <h1>Garagem do Gabriel</h1>
      <h2>Honda</h2>
     </div>
    </div>
  );
}
