import React, { useEffect, useState } from "react";
import Axios from "axios";
import CardPessoaFisica from "../cards/cardFormPessoaFisica";
import Header from "../header";

export default function FormPessoaFisica() {
  const [values, setValues] = useState({});
  const [listPessoaFisica, setListPessoaFisica] = useState([]);

  // Função para validação de formulário
  const validateForm = () => {
    // Implementar lógica de validação para campos obrigatórios e outros requisitos
    // Retornar `true` se o formulário estiver válido, `false` caso contrário
    return true; // Substitua por sua lógica de validação
  };

  // Função para lidar com o envio do formulário
  const handleRegisterPessoaFisica = async () => {
    if (!validateForm()) return; // Validar antes de enviar

    try {
      const response = await Axios.post("http://localhost:3001/register/pessoa-fisica", {
        ...values,
      });

      if (response.status === 200) {
        // Cadastro realizado com sucesso
        // Buscar a lista atualizada de Pessoas Físicas
        const updatedListPessoaFisica = await fetchListPessoaFisica();
        setListPessoaFisica(updatedListPessoaFisica);

        // Limpar o formulário
        setValues({});
      } else {
        // Exibir mensagem de erro (implementar)
        console.error("Erro no cadastro:", response);
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  // Função para buscar a lista de Pessoas Físicas
  const fetchListPessoaFisica = async () => {
    try {
      const response = await Axios.get("http://localhost:3001/getCards/pessoa-fisica");
      if (response.status === 200) {
        return response.data;
      } else {
        console.error("Erro ao buscar lista:", response);
        return []; // Retornar lista vazia em caso de erro
      }
    } catch (error) {
      console.error("Erro:", error);
      return []; // Retornar lista vazia em caso de erro
    }
  };

  // Buscar a lista inicial de Pessoas Físicas no useEffect
  useEffect(() => {
    fetchListPessoaFisica().then((data) => setListPessoaFisica(data));
  }, []);

  // Função para lidar com a mudança de valores nos campos do formulário
  const handleAddValues = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <>
      
      <div className="container cardBoxForm">
        <div className="register-container">
          <h1 className="register-title">Cadastro de Pessoa Física</h1>

          <input
            type="text"
            name="name"
            placeholder="Nome"
            className="register-input"
            value={values.name || ""}
            onChange={handleAddValues}
          />

          {/* Outros inputs do formulário... */}

          <button onClick={handleRegisterPessoaFisica} className="register-button">
            Cadastrar
          </button>

          <br></br>
          <br></br>
        </div>

        {listPessoaFisica.sort((a, b) => b.id - a.id).map((value) => (
          <CardPessoaFisica
            key={value.id}
            listPessoaFisica={listPessoaFisica}
            setListPessoaFisica={setListPessoaFisica}
            id={value.id}
            name={value.name}
            apelido={value.apelido}
            sexo={value.sexo}
            datanascimento={value.datanascimento}
            rg={value.rg}
            ssp={value.ssp}
            cpf={value.cpf}
            cartaosus={value.cartaosus}
            endereco={value.endereco}
            numero={value.numero}
            bairro={value.bairro}
            municipio={value.municipio}
            complemento={value.complemento}
            pontodereferencia={value.pontodereferencia}
            contato1={value.contato1}
            contato2={value.contato2}
            anocadastro={value.anocadastro}
            pai={value.pai}
            mae={value.mae}
            responsavel={value.responsavel}
            bolsaFamilia={value.bolsaFamilia}
            valorbolsafamilia={value.valorbolsafamilia}
            beneficiodeprestacaocontinuada={value.beneficiodeprestacaocontinuada}
            nis={value.nis}
            cid10={value.cid10}
            datainclusao={value.datainclusao}
            datadesligamento={value.datadesligamento}
            usodeimagem={value.usodeimagem}
            servicos={value.servicos}
          />
        ))}
      </div>
    </>
  );
}
