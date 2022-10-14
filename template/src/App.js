import React from "react";
import "./App.css";
import Garagem from "./Garagem";// tem que trazer o componente! 
import Header from "./Header";
import Footer from "./Footer";


export default function App() {
  

  return (
    <div className="App">
      <Header/>
      <Garagem/>
      <Footer/>
    </div>
  );
}
