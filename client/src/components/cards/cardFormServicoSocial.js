import React from "react";
import "./card.css";
import FormDialogServicoSocial from "../dialog/dialogFormServicoSocial";

export default function CardServicoSocial(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <FormDialogServicoSocial
        open={open}
        setOpen={setOpen}
        name={props.name}
        apelido={props.apelido}
        funcao={props.funcao} 
        matricula={props.matricula}
        email={props.email} 
        cpf={props.cpf} 
        conselhodeclasse={props.conselhodeclasse} 
        numeroconselhodeclasse={props.numeroconselhodeclasse}
        especialidade={props.especialidade} 
        endereco={props.endereco}
        numero={props.numero}
        bairro={props.bairro}
        complemento={props.complemento}
        municipio={props.municipio}
        contato3={props.contato3}
        contato4={props.contato4}
        anocadastro={props.anocadastro}
        listServicoSocial={props.listServicoSocial}  
        setListServicoSocial={props.setListServicoSocial}
        id={props.id}
      />

      {/* ESTA PARTE DE BAIXO É O CARD QUE APARECE AS INFORMAÇÕES - ADICIONEI O PRINCIPAL */}

      <div className="card-container" onClick={() => setOpen(true)}>
        <h1 className="card-title">nome:{props.name} - Matrícula:{props.matricula} - Conselho:{props.conselhodeclasse} </h1>
        <p className="card-id">{props.id}</p>
        <p className="card-cartegory"> Nº Conselho:{props.numeroconselhodeclasse} - Endereço:{props.endereco},{props.numero}, Bairro:{props.bairro} </p>
        <h3 className="card-cost"> </h3>
      </div>
    </>
  );
}
