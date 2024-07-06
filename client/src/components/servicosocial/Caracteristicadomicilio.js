import React, { useState } from 'react';
import axios from 'axios';

const SelectInput = ({ name, value, options, onChange, className }) => (
  <select name={name} value={value} onChange={onChange} className={className}>
    <option value="">Selecione</option>
    {options.map(option => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

const CaracteristicaDomicilio = () => {
  const [values, setValues] = useState({
    programahabitacional: '',
    programaleite: '',
    aluguelsocial: '',
    primeiropasso: '',
    laudomedico: '',
    vinculoinstituicao: '',
    demandas: '',
    encaminhamentos: ''
  });
  
  const [entries, setEntries] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleAddValues = () => {
    setEntries([...entries, { ...values, id: entries.length + 1 }]);
    setValues({
      programahabitacional: '',
      programaleite: '',
      aluguelsocial: '',
      primeiropasso: '',
      laudomedico: '',
      vinculoinstituicao: '',
      demandas: '',
      encaminhamentos: ''
    });
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:3000/api/caracteristica-domicilio', entries);
      setEntries([]); // Clear entries after successful submission
      alert('Dados enviados com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      alert('Erro ao enviar dados');
    }
  };

  const handleDeleteEntry = (id) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  return (
    <div>
      <h2>Características do Domicílio</h2>

      <label>Participação em programas governamentais:</label>
      <label>Programa habitacional</label>
      <SelectInput
        name="programahabitacional"
        value={values.programahabitacional}
        onChange={handleInputChange}
        className="register-input"
        options={[
          { value: 'Sim', label: 'Sim' },
          { value: 'nao', label: 'Não' }
        ]}
      />

<label>Programa do leite</label>  
      <SelectInput
        name="programaleite"
        value={values.programaleite}
        onChange={handleInputChange}
        className="register-input"
        options={[
          { value: 'Sim', label: 'Sim' },
          { value: 'nao', label: 'Não' }
        ]}
      />

    <label>Aluguel social</label>
      <SelectInput
        name="aluguelsocial"
        value={values.aluguelsocial}
        onChange={handleInputChange}
        className="register-input"
        options={[
          { value: 'Sim', label: 'Sim' },
          { value: 'nao', label: 'Não' }
        ]}
      />

    <label>Primeiro passo</label>
      <SelectInput
        name="primeiropasso"
        value={values.primeiropasso}
        onChange={handleInputChange}
        className="register-input"
        options={[
          { value: 'Sim', label: 'Sim' },
          { value: 'nao', label: 'Não' }
        ]}
      />

    <label>Laudo médico:</label>
      <textarea
        name="laudomedico"
        className="register-input"
        placeholder="Laudo médico"
        value={values.laudomedico}
        onChange={handleInputChange}
      ></textarea>

      <label>Vínculo com a instituição:</label>
      
      <SelectInput
        name="vinculoinstituicao"
        value={values.vinculoinstituicao}
        onChange={handleInputChange}
        className="register-input"
        options={[
          { value: 'Sim', label: 'Secretaria de saúde' },
          { value: 'nao', label: 'Instituto Heitor Coelho' }
        ]}
      />

<label>Demandas</label>
      <textarea
        name="demandas"
        className="register-input"
        placeholder="Demandas"
        value={values.demandas}
        onChange={handleInputChange}
      ></textarea>
   
   <label>Encaminhamentos</label>
      <textarea
        name="encaminhamentos"
        className="register-input"
        placeholder="Encaminhamentos"
        value={values.encaminhamentos}
        onChange={handleInputChange}
      ></textarea>

      <button onClick={handleAddValues}>Adicionar</button>

      <table id="caracteristicaDomicilio">
        <thead>
          <tr>
            <th>Programa Habitacional</th>
            <th>Programa Leite</th>
            <th>Aluguel Social</th>
            <th>Primeiro Passo</th>
            <th>Laudo Médico</th>
            <th>Vínculo Instituição</th>
            <th>Demandas</th>
            <th>Encaminhamentos</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.programahabitacional}</td>
              <td>{entry.programaleite}</td>
              <td>{entry.aluguelsocial}</td>
              <td>{entry.primeiropasso}</td>
              <td>{entry.laudomedico}</td>
              <td>{entry.vinculoinstituicao}</td>
              <td>{entry.demandas}</td>
              <td>{entry.encaminhamentos}</td>
              <td>
                <button onClick={() => handleDeleteEntry(entry.id)}>Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSubmit}>Enviar Todos</button>
    </div>
  );
};

export default CaracteristicaDomicilio;
