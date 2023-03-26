import React from "react";
import "./App.css";
import Garagem from "./components/Garagem"
import Header from "./components/Header";
import Footer from "./components/Footer"
import "./components/style.css"
export default function App() {
  return (
    <div className="App">

      <h1>Aula - Componentes React</h1>
          <Header />
          <Garagem />
          <Footer />
    </div>
  );
}
