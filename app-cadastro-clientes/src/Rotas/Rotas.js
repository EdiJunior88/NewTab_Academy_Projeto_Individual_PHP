import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Paginas/Home/home";
import { Cadastro } from "../Paginas/Cadastro/cadastro";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/cadastro' element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
