import React, { useEffect, useState } from "react";
import Axios from "axios";
import Header from "../header";
import ComposicaoFamiliar from "./ComposisaoFamiliar";
import DespesaFamiliar from "./DespesaFamiliar";
import CardServicoSocial from "../cards/cardFormServicoSocial";
import ParticipacaoProgramasSAS from "./ParticipacaoProgramasSAS";
import CaracteristicaDomicilio from './CaracteristicaDomicilio';



export default function ServicoSocial() {
  const [values, setValues] = useState({});
    const [listServicoSocial, setListServicoSocial] = useState([]);

  // Função para validação de formulário
  const validateForm = () => {
    // Implementar lógica de validação para campos obrigatórios e outros requisitos
    // Retornar `true` se o formulário estiver válido, `false` caso contrário
    return true; // Substitua por sua lógica de validação
  };

 // Função para lidar com o envio do formulário
  const handleRegisterServicoSocial = async () => {
    if (!validateForm()) return; // Validar antes de enviar

    try {
      const response = await Axios.post("http://localhost:3001/register/pessoa-fisica", {
        name: values.name,
        apelido: values.apelido,
        funcao: values.funcao,
        matricula: values.matricula,
        email: values.email,
        cpf: values.cpf,
        conselhodeclasse: values.conselhodeclasse,
        numeroconselhodeclasse: values.numeroconselhodeclasse,
        especialidade: values.especialidade,
        endereco: values.endereco,
        numero: values.numero,
        bairro: values.bairro,
        complemento: values.complemento,
        municipio: values.municipio,
        contato1: values.contato1,
        contato2: values.contato2,
        anocadastro: values.anocadastro,
      });

      if (response.status === 200) {
        // Cadastro realizado com sucesso
        // Buscar a lista atualizada de Pessoas Jurídicas
        const updatedListServicoSocial = await fetchListServicoSocial();
        setListServicoSocial(updatedListServicoSocial);
        
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

  // Função para buscar a lista de Pessoas fisicas
  const fetchListServicoSocial = async () => {
    try {
      const response = await Axios.get("http://localhost:3001/getCards/servico-social");
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
    fetchListServicoSocial().then((data) => setListServicoSocial(data));
  }, []);

  // Função para lidar com a mudança de valores nos campos do formulário
  const handleAddValues = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return (
    
    <Header />,
        
    <div className="container cardBoxForm">
      <div className="register-container">
        <h1 className="register-title">Serviço social</h1>
        

<CaracteristicaDomicilio />

<ComposicaoFamiliar />

<input
  type="text"
  name="agentesaude"
  placeholder=" Agente de Saúde"
  className="register-input"
  value={values.agentesaude}
  onChange={handleAddValues}
/>
<textarea
  name="observacoes"
  className="register-input"
  placeholder="Observações"
  value={values.observacoes}
  onChange={handleAddValues}
></textarea>


<DespesaFamiliar />

<ParticipacaoProgramasSAS />



        <button onClick={handleRegisterServicoSocial} className="register-button">
          Cadastrar
        </button>
      </div>

      {typeof listServicoSocial !== "undefined" && listServicoSocial.sort((a, b) => b.id - a.id).map((value) => {
        return (
// precisa ser atualizado conforme os inputs:

        <CardServicoSocial
          key={value.id}
          listServicoSocial={listServicoSocial}
          setListServicoSocial={setListServicoSocial}
          id={value.id}
          name={value.name}
          apelido={value.apelido}
          funcao={value.funcao} 
          matricula={value.matricula}
          email={value.email} 
          cpf={value.cpf} 
          conselhodeclasse={value.conselhodeclasse} 
          numeroconselhodeclasse={value.numeroconselhodeclasse}
          especialidade={value.especialidade} 
          endereco={value.endereco}
          numero={value.numero}
          bairro={value.bairro}
          complemento={value.complemento}
          municipio={value.municipio}
          contato1={value.contato1}
          contato2={value.contato2}
          anocadastro={value.anocadastro}
        ></CardServicoSocial>
        );
    })}
      
      
    </div>
  );
}
