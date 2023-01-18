import React from "react";
import "./App.css";
import Garagem from "./componentes/Garagem";
// import { Carro } from "./componentes/Carro";
import { Footer } from "./componentes/Footer";
export default function App() {
  

  return (
    <div className="App">
      <Garagem/>
      {/* <Carro/> */}
      <Footer/>

    </div>
  );
}
