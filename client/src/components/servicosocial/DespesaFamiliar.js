import React, { useState } from 'react';

const DespesaFamiliar = () => {
  const [despesas, setDespesas] = useState({
    aluguel: 0,
    planoSaude: 0,
    alimentacao: 0,
    agua: 0,
    luz: 0,
    gas: 0,
    medicacao: 0,
    transporte: 0,
    outrasDespesas: 0,
    totalGeral: 0
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDespesas({
      ...despesas,
      [name]: parseFloat(value)
    });
  };

  const handleAddValues = () => {
    // Cálculo do total geral das despesas excluindo o campo totalGeral
    const { totalGeral, ...otherDespesas } = despesas;
    const total = Object.values(otherDespesas)
      .reduce((acc, curr) => acc + curr, 0);

    setDespesas({
      ...despesas,
      totalGeral: total
    });
  };

  return (
    <section id="despesasFamiliares">
      <h2>Despesas Familiares</h2>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Valor (R$)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Aluguel (R$)</th>
            <td>R$ {despesas.aluguel.toFixed(2)}</td>
          </tr>
          <tr>
            <th>Plano de Saúde (R$)</th>
            <td>R$ {despesas.planoSaude.toFixed(2)}</td>
          </tr>
          <tr>
            <th>Alimentação (R$)</th>
            <td>R$ {despesas.alimentacao.toFixed(2)}</td>
          </tr>
          <tr>
            <th>Água (R$)</th>
            <td>R$ {despesas.agua.toFixed(2)}</td>
          </tr>
          <tr>
            <th>Luz (R$)</th>
            <td>R$ {despesas.luz.toFixed(2)}</td>
          </tr>
          <tr>
            <th>Gás (R$)</th>
            <td>R$ {despesas.gas.toFixed(2)}</td>
          </tr>
          <tr>
            <th>Medicação (R$)</th>
            <td>R$ {despesas.medicacao.toFixed(2)}</td>
          </tr>
          <tr>
            <th>Transporte (R$)</th>
            <td>R$ {despesas.transporte.toFixed(2)}</td>
          </tr>
          <tr>
            <th>Outras Despesas (R$)</th>
            <td>R$ {despesas.outrasDespesas.toFixed(2)}</td>
          </tr>
          <tr>
            <th>Total Geral (R$)</th>
            <td>R$ {despesas.totalGeral.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      {/* Inputs para adicionar valores */}
      <div>
        <label htmlFor="aluguel">Aluguel (R$):</label>
        <input
          type="number"
          id="aluguel"
          name="aluguel"
          value={despesas.aluguel}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="planoSaude">Plano de Saúde (R$):</label>
        <input
          type="number"
          id="planoSaude"
          name="planoSaude"
          value={despesas.planoSaude}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="alimentacao">Alimentação (R$):</label>
        <input
          type="number"
          id="alimentacao"
          name="alimentacao"
          value={despesas.alimentacao}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="agua">Água (R$):</label>
        <input
          type="number"
          id="agua"
          name="agua"
          value={despesas.agua}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="luz">Luz (R$):</label>
        <input
          type="number"
          id="luz"
          name="luz"
          value={despesas.luz}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="gas">Gás (R$):</label>
        <input
          type="number"
          id="gas"
          name="gas"
          value={despesas.gas}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="medicacao">Medicação (R$):</label>
        <input
          type="number"
          id="medicacao"
          name="medicacao"
          value={despesas.medicacao}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="transporte">Transporte (R$):</label>
        <input
          type="number"
          id="transporte"
          name="transporte"
          value={despesas.transporte}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="outrasDespesas">Outras Despesas (R$):</label>
        <input
          type="number"
          id="outrasDespesas"
          name="outrasDespesas"
          value={despesas.outrasDespesas}
          onChange={handleInputChange}
        />
      </div>

      {/* Botão para calcular e atualizar as despesas */}
      <button onClick={handleAddValues}>Calcular Total Geral</button>
    </section>
  );
};

export default DespesaFamiliar;
