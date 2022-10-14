import React from "react";
import "./App.css";
import Garagem from "./componentes/Garagem"; // importar componente pra pagina principal
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";

export default function App() {


  return (
    <div>
      <Header />

      <h1>Aula - Componentes React</h1>
      <Garagem />

      <Footer />

    </div>

  );
}

/* importar e aparecer na tela com <Garagem /> */