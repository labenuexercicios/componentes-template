import React from 'react';
import './App.css';

import Garagem from "./componentes/Garagem"

import Carros from "./componentes/Carros"

import Footer from "./componentes/Footer"

export default function App() {
  
  
  return (
    <div className="App">
      <Garagem/>
      <Carros/>
      <Carros/>
      <Carros/>
      <Carros/>
      <Footer/>
    </div>
  );
}
