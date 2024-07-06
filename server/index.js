const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ihc",
});

app.use(express.json());
app.use(cors());

//REQUISIÇÕES PARA PESSOA JURIDICA
app.post("/register", (req, res) => {
  const { name } = req.body;
  const { apelido } = req.body;
  const { sexo } = req.body;
  


  let mysql = "INSERT INTO formpessoafisica ( name, apelido, sexo) VALUES ( ?, ?, ? )";
  db.query(mysql, [ name, apelido, sexo ], (err, result) => {
    res.send(result);
  });
});

app.post("/search", (req, res) => {
  
  const { name } = req.body;
  
  let mysql =
    "SELECT * from formpessoafisica WHERE cnpj = ?, esfempresaunidade = ?, razaosocial = ?, nomefantasia = ?, cnes = ?, cpfresponsavellegal = ?, nomeresponsavellegal = ?, cpfresponsaveltecnico = ?, nomeresponsaveltecnico = ?, numeroresponsaveltecnico = ?, endereco = ?, numero = ?, bairro = ?, complemento = ?, municipio = ?, contato1 = ?, contato2 = ?, anocadastro = ?";
  db.query(mysql, [ name, esfempresaunidade, razaosocial, nomefantasia, cnes, cpfresponsavellegal, nomeresponsavellegal, cpfresponsaveltecnico, nomeresponsaveltecnico, numeroresponsaveltecnico, endereco, numero, bairro, complemento, municipio, contato1, contato2, anocadastro ], (err, result) => {
    if (err) res.send(err);
    res.send(result);
  });
});

app.get("/getCards", (req, res) => {
  let mysql = "SELECT * FROM pessoajuridica";
  db.query(mysql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


//REQUISIÇÕES PARA PESSOA FÍSICA

app.post("/register/pessoa-fisica", (req, res) => {
     const { name } = req.body;
   const { apelido } = req.body;
   const { sexo } = req.body;
   


  let mysql = "INSERT INTO formpessoafisica ( name, apelido, sexo) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )";
  db.query(mysql, [ name, apelido, sexo ], (err, result) => {
    res.send(result);
  });
});

app.post("/search/pessoa-fisica", (req, res) => {
  
   const { name } = req.body;
   const { apelido } = req.body;
   const { sexo } = req.body;
   const { matricula } = req.body;
   const { email } = req.body;
   const { cpf } = req.body;
   const { conselhodeclasse } = req.body;
   const { numeroconselhodeclasse } = req.body;
   const { especialidade } = req.body;
   const { endereco } = req.body;
   const { numero } = req.body;
   const { bairro } = req.body;
   const { complemento } = req.body;
   const { municipio } = req.body;
   const { contato3 } = req.body;
   const { contato4 } = req.body;
   const { anocadastro } = req.body;
  
  let mysql =
    "SELECT * from formpessoafisica WHERE name = ?, apelido = ?, funcao = ?, matricula = ?, email = ?, cpf = ?, conselhodeclasse = ?, numeroconselhodeclasse = ?, especialidade = ?, endereco = ?, numero = ?, bairro = ?, complemento = ?, municipio = ?, contato1 = ?, contato2 = ?, anocadastro = ?";
  db.query(mysql, [ name, apelido, funcao, matricula, email, cpf, conselhodeclasse, numeroconselhodeclasse, especialidade, endereco, numero, bairro, complemento, municipio, contato3, contato4, anocadastro ], (err, result) => {
    if (err) res.send(err);
    res.send(result);
  });
});

app.get("/getCards/pessoa-fisica", (req, res) => {
  let mysql = "SELECT * FROM formpessoafisica";
  db.query(mysql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/edit/pessoa-fisica", (req, res) => {
   const { id } = req.body;
   const { name } = req.body;
   const { apelido } = req.body;
   const { funcao } = req.body;
   const { matricula } = req.body;
   const { email } = req.body;
   const { cpf } = req.body;
   const { conselhodeclasse } = req.body;
   const { numeroconselhodeclasse } = req.body;
   const { especialidade } = req.body;
   const { endereco } = req.body;
   const { numero } = req.body;
   const { bairro } = req.body;
   const { complemento } = req.body;
   const { municipio } = req.body;
   const { contato3 } = req.body;
   const { contato4 } = req.body;
   const { anocadastro } = req.body;
  
   let mysql = "UPDATE formpessoafisica SET name = ?, apelido = ?, funcao = ?, matricula = ?, email = ?, cpf = ?, conselhodeclasse = ?, numeroconselhodeclasse = ?, especialidade = ?, endereco = ?, numero = ?, bairro = ?, complemento = ?, municipio = ?, contato1 = ?, contato2 = ?, anocadastro = ? WHERE id = ?";
   db.query(mysql, [ name, apelido, funcao, matricula, email, cpf,conselhodeclasse, numeroconselhodeclasse, especialidade, endereco, numero, bairro, complemento, municipio, contato3, contato4, anocadastro, id], (err, result) => {
   if (err) {
     console.error(err); // Registre o erro para fins de depuração
     res.status(500).send("Erro: Ocorreu um erro no banco de dados");
    } else {
     res.send(result);
    }
   });
  });
 

app.delete("/delete/pessoa-fisica/:id", (req, res) => {
  const { id } = req.params;
  let mysql = "DELETE FROM formpessoafisica WHERE id = ?";
  db.query(mysql, [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});






























app.listen(3001, () => {
  console.log("rodando na porta 3001");
});
