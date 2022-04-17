import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import AuthProvider from './contexts/Auth';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Saida from './components/Saida';
import Entrada from './components/Entrada';
import Historico from './components/Historico';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Menu />
          <Routes>
            <Route path="/" element={<Entrada />} />
            <Route path="/out/*" element={<Saida />} />
            <Route path="/historico" element={<Historico />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
