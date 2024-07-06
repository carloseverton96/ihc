import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ComposicaoFamiliar = () => {
  const [familiares, setFamiliares] = useState([]);
  const [inputValues, setInputValues] = useState({
    ordemFamiliar: '',
    nomeFamiliar: '',
    vinculoFamiliar: '',
    dataNascimento: '',
    ocupacao: '',
    vinculoEmpregaticio: '',
    renda: '',
    escolaridade: '',
    redeEscolar: '',
    unidadeSaude: ''
    // Remova agenteSaude aqui
  });

  useEffect(() => {
    // Carrega os familiares do servidor ao montar o componente
    fetchFamiliares();
  }, []);

  const fetchFamiliares = async () => {
    try {
      const response = await axios.get('/api/familiares');
      setFamiliares(response.data);
    } catch (error) {
      console.error('Erro ao carregar familiares:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleAddValues = async () => {
    try {
      const response = await axios.post('/api/familiares', inputValues);
      setFamiliares([...familiares, response.data]); // Adiciona o novo familiar à lista
      setInputValues({
        ordemFamiliar: '',
        nomeFamiliar: '',
        vinculoFamiliar: '',
        dataNascimento: '',
        ocupacao: '',
        vinculoEmpregaticio: '',
        renda: '',
        escolaridade: '',
        redeEscolar: '',
        unidadeSaude: ''
        // Remova agenteSaude aqui
      });
    } catch (error) {
      console.error('Erro ao adicionar familiar:', error);
    }
  };

  const handleDeleteFamiliar = async (id) => {
    try {
      await axios.delete(`/api/familiares/${id}`);
      const novosFamiliares = familiares.filter(familiar => familiar.id !== id);
      setFamiliares(novosFamiliares);
    } catch (error) {
      console.error('Erro ao deletar familiar:', error);
    }
  };

  const handleUpdateFamiliar = async (id) => {
    try {
      const response = await axios.put(`/api/familiares/${id}`, inputValues);
      setFamiliares([...familiares, response.data]); // Adiciona o familiar atualizado à lista
      setInputValues({
        ordemFamiliar: '',
        nomeFamiliar: '',
        vinculoFamiliar: '',
        dataNascimento: '',
        ocupacao: '',
        vinculoEmpregaticio: '',
        renda: '',
        escolaridade: '',
        redeEscolar: '',
        unidadeSaude: ''
        // Remova agenteSaude aqui
      });
    } catch (error) {
      console.error('Erro ao atualizar familiar:', error);
    }
  };

  return (
    <div>
      <h2>Composição Familiar</h2>

      {/* Inputs e botão de adicionar familiar como antes */}

      <table id="composicaoFamiliar">
        <thead>
          <tr>
            <th>Ordem</th>
            <th>Nome</th>
            <th>Vínculo</th>
            <th>Data de Nascimento</th>
            <th>Ocupação</th>
            <th>Vínculo Empregatício</th>
            <th>Renda</th>
            <th>Escolaridade</th>
            <th>Rede Escolar</th>
            <th>Unidade de Saúde</th>
            {/* Remova a coluna Agente de Saúde aqui */}
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {familiares.map((familiar, index) => (
            <tr key={familiar.id}>
              <td>{familiar.ordemFamiliar}</td>
              <td>{familiar.nomeFamiliar}</td>
              <td>{familiar.vinculoFamiliar}</td>
              <td>{familiar.dataNascimento}</td>
              <td>{familiar.ocupacao}</td>
              <td>{familiar.vinculoEmpregaticio}</td>
              <td>R$ {familiar.renda.toFixed(2)}</td>
              <td>{familiar.escolaridade}</td>
              <td>{familiar.redeEscolar}</td>
              <td>{familiar.unidadeSaude}</td>
              {/* Remova a célula correspondente a Agente de Saúde aqui */}
              <td>
                <button onClick={() => handleUpdateFamiliar(familiar.id)}>Atualizar</button>
                <button onClick={() => handleDeleteFamiliar(familiar.id)}>Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComposicaoFamiliar;
