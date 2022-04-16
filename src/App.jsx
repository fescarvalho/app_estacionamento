import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Saida from './components/Saida';
import Entrada from './components/Entrada';
import Historico from './components/Historico';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Entrada />} />
          <Route path="/out/*" element={<Saida />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
