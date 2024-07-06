import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import FormPessoaFisica from './components/formpessoafisica/FormPessoaFisica';
import ServicoSocial from './components/servicosocial/ServicoSocial';





const App = () => {
  return (
<Router>
      <Header />
      
      <Routes>
        
        <Route path="/pessoa-fisica" element={ <FormPessoaFisica/> } />
        <Route path="/servico-social" element={ <ServicoSocial/> } />
        {/* Adicione outras rotas conforme necessário */}
        
      </Routes>
    </Router>
  );
}

export default App;
