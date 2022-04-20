import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Saida from './components/Saida';
import Entrada from './components/Entrada';
import Historico from './components/Historico';
import { ToastContainer } from 'react-toastify';

import './App.css';
import 'react-toastify/dist/ReactToastify.min.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Entrada />} />
          <Route path="/out/*" element={<Saida />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>

        <ToastContainer
          fontFamily="Poppins"
          theme="dark"
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
        />
      </BrowserRouter>
    </>
  );
};

export default App;
