import React from 'react';

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

const ParticipacaoProgramasSAS = ({ values, handleAddValues }) => (
  <div>
    <label>Participação em programas SAS:</label>
    
    <SelectInput
      name="programahabitacional"
      value={values.programahabitacional}
      onChange={handleAddValues}
      className="register-input"
      options={[
        { value: 'Sim', label: 'Sim' },
        { value: 'nao', label: 'Não' }
      ]}
    />

    <SelectInput
      name="programaleite"
      value={values.programaleite}
      onChange={handleAddValues}
      className="register-input"
      options={[
        { value: 'Sim', label: 'Sim' },
        { value: 'nao', label: 'Não' }
      ]}
    />

    <SelectInput
      name="aluguelsocial"
      value={values.aluguelsocial}
      onChange={handleAddValues}
      className="register-input"
      options={[
        { value: 'Sim', label: 'Sim' },
        { value: 'nao', label: 'Não' }
      ]}
    />

    <SelectInput
      name="primeiropasso"
      value={values.primeiropasso}
      onChange={handleAddValues}
      className="register-input"
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
      name="vinculainstituicao"
      value={values.vinculainstituicao}
      onChange={handleAddValues}
      className="register-input"
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
