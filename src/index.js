import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bebidas from './pages/bebidas';
import Cardapio from './pages/home';
import Refeicoes from './pages/refeicoes';
import Precos from './components/precos';
import Tabela from './pages/tabela';
import Cabecalho from './components/cabecalho';
import Lanches from './pages/lanches';
import Guarnicao from './pages/guarnicao';
import Saladas from './pages/saladas';
import Rodape from './components/rodape';
import Botao from './components/botao';
import Promo from './components/botao';
import Quinta from './components/botao';
import Domingo from './components/botao';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Cardapio/>}/>
        <Route path='/bebidas' element={<Bebidas />}/>
        <Route path='/refeicoes' element={<Refeicoes />}/>
        <Route path='/precos' element={<Precos />}/>
        <Route path='/tabela' element={<Tabela />}/>
        <Route path='/cabecalho' element={<Cabecalho />}/>
        <Route path='/lanches' element={<Lanches />}/>
        <Route path='/guarnicao' element={<Guarnicao />}/>
        <Route path='/saladas' element={<Saladas />}/>
        <Route path='/rodape' element={<Rodape />}/>
        <Route path='/botao' element={<Botao />}/>
        <Route path='/promo' element={<Promo />}/>
        <Route path='/quinta' element={<Quinta />}/>
        <Route path='/domingo' element={<Domingo />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);