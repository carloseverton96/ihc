import React, { useState } from 'react';
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
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleAddValues = () => {
    setFamiliares([...familiares, { ...inputValues, id: familiares.length + 1 }]);
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
    });
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:3000/api/familiares', familiares);
      setFamiliares([]); // Limpa a lista após o envio
      alert('Dados enviados com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      alert('Erro ao enviar dados');
    }
  };

  const handleDeleteFamiliar = (id) => {
    setFamiliares(familiares.filter(familiar => familiar.id !== id));
  };

  return (
    <div>
      <h2>Composição Familiar</h2>
      <div>
        <input
          type="text"
          name="ordemFamiliar"
          placeholder="Ordem Familiar"
          value={inputValues.ordemFamiliar}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="nomeFamiliar"
          placeholder="Nome Familiar"
          value={inputValues.nomeFamiliar}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="vinculoFamiliar"
          placeholder="Vínculo Familiar"
          value={inputValues.vinculoFamiliar}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="dataNascimento"
          placeholder="Data de Nascimento"
          value={inputValues.dataNascimento}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="ocupacao"
          placeholder="Ocupação"
          value={inputValues.ocupacao}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="vinculoEmpregaticio"
          placeholder="Vínculo Empregatício"
          value={inputValues.vinculoEmpregaticio}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="renda"
          placeholder="Renda"
          value={inputValues.renda}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="escolaridade"
          placeholder="Escolaridade"
          value={inputValues.escolaridade}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="redeEscolar"
          placeholder="Rede Escolar"
          value={inputValues.redeEscolar}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="unidadeSaude"
          placeholder="Unidade de Saúde"
          value={inputValues.unidadeSaude}
          onChange={handleInputChange}
        />
        <button onClick={handleAddValues}>Adicionar</button>
      </div>

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
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {familiares.map((familiar) => (
            <tr key={familiar.id}>
              <td>{familiar.ordemFamiliar}</td>
              <td>{familiar.nomeFamiliar}</td>
              <td>{familiar.vinculoFamiliar}</td>
              <td>{familiar.dataNascimento}</td>
              <td>{familiar.ocupacao}</td>
              <td>{familiar.vinculoEmpregaticio}</td>
              <td>R$ {Number(familiar.renda).toFixed(2)}</td>
              <td>{familiar.escolaridade}</td>
              <td>{familiar.redeEscolar}</td>
              <td>{familiar.unidadeSaude}</td>
              <td>
                <button onClick={() => handleDeleteFamiliar(familiar.id)}>Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSubmit}>Enviar Todos</button>
    </div>
  );
};

export default ComposicaoFamiliar;
