//este é a parte que surge uma caixa de formulário para atualizar ou deletar algum cadastro.

import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material'; 
import Axios from "axios";



export default function FormDialogServicoSocial(props) {
  const [editValues, setEditValues] = useState({
    id: props.id,
    name:props.name,
    apelido:props.apelido,
    funcao:props.funcao, 
    matricula:props.matricula,
    email:props.email, 
    cpf:props.cpf, 
    conselhodeclasse:props.conselhodeclasse, 
    numeroconselhodeclasse:props.numeroconselhodeclasse,
    especialidade:props.especialidade, 
    endereco:props.endereco,
    numero:props.numero,
    bairro:props.bairro,
    complemento:props.complemento,
    municipio:props.municipio,
    contato3:props.contato3,
    contato4:props.contato4,
    anocadastro:props.anocadastro,
  });

  const handleChangeValues = (values) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [values.target.id]: values.target.value,
    }));
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleEditServicoSocial = () => {
    Axios.put("http://localhost:3001/edit/servico-social", {
      id: editValues.id,
      name:editValues.name,
      apelido:editValues.apelido,
      funcao:editValues.funcao, 
      matricula:editValues.matricula,
      email:editValues.email, 
      cpf:editValues.cpf, 
      conselhodeclasse:editValues.conselhodeclasse, 
      numeroconselhodeclasse:editValues.numeroconselhodeclasse,
      especialidade:editValues.especialidade, 
      endereco:editValues.endereco,
      numero:editValues.numero,
      bairro:editValues.bairro,
      complemento:editValues.complemento,
      municipio:editValues.municipio,
      contato3:editValues.contato3,
      contato4:editValues.contato4,
      anocadastro:editValues.anocadastro,

    }).then(() => {
      // Crie um novo array para armazenar os dados atualizados
      const updatedListServicoSocial = props.listServicoSocial.map((value) => {
        // Verifique se o ID corresponde ao valor editado
        if (value.id === editValues.id) {
          // Retorne um novo objeto com os dados atualizados
          return {
            id: editValues.id,
            name:editValues.name,
            apelido:editValues.apelido,
            funcao:editValues.funcao, 
            matricula:editValues.matricula,
            email:editValues.email, 
            cpf:editValues.cpf, 
            conselhodeclasse:editValues.conselhodeclasse, 
            numeroconselhodeclasse:editValues.numeroconselhodeclasse,
            especialidade:editValues.especialidade, 
            endereco:editValues.endereco,
            numero:editValues.numero,
            bairro:editValues.bairro,
            complemento:editValues.complemento,
            municipio:editValues.municipio,
            contato3:editValues.contato3,
            contato4:editValues.contato4,
            anocadastro:editValues.anocadastro,
          };
        } else {
          // Retorne o valor original para outros itens
          return value;
        }
      });

      // Atualize o estado com o novo array usando a prop recebida
      props.setListServicoSocial(updatedListServicoSocial);
    });
    handleClose();
  };
  
  const handleDeleteServicoSocial = () => {
    Axios.delete(`http://localhost:3001/delete/servico-social/${editValues.id}`).then(() => {
      props.setListServicoSocial(
        props.listServicoSocial.filter((value) => {
          return value.id !== editValues.id;
        })
      );
    });
    handleClose();
  };

  return (
    <div>
      <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <TextField
            disabled
            margin="dense"
            id="id"
            label="id"
            defaultValue={props.id}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="name"
            defaultValue={props.name}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
         

          <TextField
            margin="dense"
            id="apelido"
            label="apelido"
            defaultValue={props.apelido}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />

          <TextField
            margin="dense"
            id="funcao"
            label="funcao"
            defaultValue={props.funcao}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />

          <TextField
            margin="dense"
            id="matricula"
            label="matricula"
            defaultValue={props.matricula}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />

          <TextField
            margin="dense"
            id="emails"
            label="email"
            defaultValue={props.email}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />

          <TextField
            margin="dense"
            id="cpf"
            label="CPF"
            defaultValue={props.cpf}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />

          <TextField
            margin="dense"
            id="numeroconselhodeclasse"
            label="numero conselho de classe"
            defaultValue={props.numeroconselhodeclasse}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />
          <TextField
            margin="dense"
            id="conselhodeclasse"
            label="conselhodeclasse"
            defaultValue={props.conselhodeclasse}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />

          <TextField
            margin="dense"
            id="especialidade"
            label="especialidade"
            defaultValue={props.especialidade}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />

          <TextField
            margin="dense"
            id="endereco"
            label="Endereço"
            defaultValue={props.endereco}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />

          <TextField
            margin="dense"
            id="numero"
            label="Nº"
            defaultValue={props.numero}
            type="number"
            fullWidth
            onChange={handleChangeValues}
          />

          <TextField
            margin="dense"
            id="bairro"
            label="Bairro"
            defaultValue={props.bairro}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />
          
          <TextField
            margin="dense"
            id="complemento"
            label="Complemento"
            defaultValue={props.complemento}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />

          <TextField
            margin="dense"
            id="municipio"
            label="Município"
            defaultValue={props.municipio}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />

          <TextField
            margin="dense"
            id="contato3"
            label="1º Contato"
            defaultValue={props.contato3}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />

          <TextField
            margin="dense"
            id="contato4"
            label="2º Contato"
            defaultValue={props.contato4}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />

          <TextField
            margin="dense"
            id="anocadastro"
            label="Ano de Cadastro" 
            defaultValue={props.anocadastro}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button color="primary" onClick={handleDeleteServicoSocial}>
            Excluir
          </Button>
          <Button color="primary" onClick={handleEditServicoSocial}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
