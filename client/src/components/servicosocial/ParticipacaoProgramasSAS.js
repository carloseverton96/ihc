import React, { useState } from 'react';

const ParticipacaoProgramaSAS = () => {
  const [formData, setFormData] = useState({
    programahabitacional: '',
    Programaleite: '',
    aluguelsocial: '',
    primeiropasso: '',
    vinculoinstituicao: '',
    textarealaudomedico: '',
    demandas: '',
    encaminhamento: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Aqui você pode adicionar a lógica para enviar os dados do formulário para um backend, se necessário
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Programa Habitacional:</label>
        <input
          type="text"
          name="programahabitacional"
          value={formData.programahabitacional}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Programa Leite:</label>
        <input
          type="text"
          name="Programaleite"
          value={formData.Programaleite}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Aluguel Social:</label>
        <input
          type="text"
          name="aluguelsocial"
          value={formData.aluguelsocial}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Primeiro Passo:</label>
        <input
          type="text"
          name="primeiropasso"
          value={formData.primeiropasso}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Vínculo Instituição:</label>
        <input
          type="text"
          name="vinculoinstituicao"
          value={formData.vinculoinstituicao}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Laudo Médico:</label>
        <textarea
          name="textarealaudomedico"
          value={formData.textarealaudomedico}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Demandas:</label>
        <textarea
          name="demandas"
          value={formData.demandas}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Encaminhamento:</label>
        <textarea
          name="encaminhamento"
          value={formData.encaminhamento}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ParticipacaoProgramaSAS;
