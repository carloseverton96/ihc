import React from 'react';

const SelectInput = ({ id, name, value, onChange, options }) => (
  <select id={id} name={name} value={value} onChange={onChange}>
    {options.map(option => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

const ParticipacaoProgramasSAS = ({ values, handleAddValues }) => (
  <div>
    <label>Participação em programas SAS:</label>
    
    <SelectInput
      id="programahabitacional"
      name="programahabitacional"
      value={values.programahabitacional}
      onChange={handleAddValues}
      options={[
        { value: 'Sim', label: 'Sim' },
        { value: 'nao', label: 'Não' }
      ]}
    />

    <SelectInput
      id="programaleite"
      name="programaleite"
      value={values.programaleite}
      onChange={handleAddValues}
      options={[
        { value: 'Sim', label: 'Sim' },
        { value: 'nao', label: 'Não' }
      ]}
    />

    <SelectInput
      id="aluguelsocial"
      name="aluguelsocial"
      value={values.aluguelsocial}
      onChange={handleAddValues}
      options={[
        { value: 'Sim', label: 'Sim' },
        { value: 'nao', label: 'Não' }
      ]}
    />

    <SelectInput
      id="primeiropasso"
      name="primeiropasso"
      value={values.primeiropasso}
      onChange={handleAddValues}
      options={[
        { value: 'Sim', label: 'Sim' },
        { value: 'nao', label: 'Não' }
      ]}
    />

    <textarea
      name="laudomedico"
      className="register-input"
      placeholder="Laudo médico"
      value={values.laudomedico}
      onChange={handleAddValues}
    ></textarea>

    <label>Vinculo com a instituição:</label>
    
    <SelectInput
      id="vinculainstituicao"
      name="vinculainstituicao"
      value={values.vinculainstituicao}
      onChange={handleAddValues}
      options={[
        { value: 'Sim', label: 'Secretaria de saúde' },
        { value: 'nao', label: 'Instituto Heitor Coelho' }
      ]}
    />

    <textarea
      name="demandas"
      className="register-input"
      placeholder="Demandas"
      value={values.demandas}
      onChange={handleAddValues}
    ></textarea>
 
    <textarea
      name="encaminhamentos"
      className="register-input"
      placeholder="Encaminhamentos"
      value={values.encaminhamentos}
      onChange={handleAddValues}
    ></textarea>
  </div>
);

export default ParticipacaoProgramasSAS;
