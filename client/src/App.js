import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header'
import FormPessoaFisica from './components/formpessoafisica/FormPessoaFisica';
import FormDialogPessoaFisica from './components/dialog/dialogFormPessoaFisica';
import CardPessoaFisica from './components/cards/cardFormPessoaFisica';

const App = () => {
  return (
<Router>
      <Header />
      
      <Routes>
        
        <Route path="/pessoa-fisica" element={ <FormPessoaFisica/> } />
        
        {/* Adicione outras rotas conforme necessário */}
        
      </Routes>
    </Router>
  );
}

export default App;
