const express = require("express");
const app = express();
const mysql = require("mysql2/promise");

const cors = require("cors");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ihc",
});

app.use(express.json());
app.use(cors());

// REQUISIÇÕES PARA PESSOA FÍSICA

// Cadastro
app.post("/register/pessoa-fisica", async (req, res) => {
  try {
    const { name, apelido, sexo } = req.body;

    const [result] = await pool.query(
      "INSERT INTO formpessoafisica (name, apelido, sexo) VALUES (?, ?, ?)",
      [name, apelido, sexo]
    );

    res.send({ message: "Pessoa física cadastrada com sucesso!", id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Erro ao cadastrar pessoa física" });
  }
});

// Busca
app.post("/search/pessoa-fisica", async (req, res) => {
  try {
    const { name, apelido, sexo } = req.body;

    const [results] = await pool.query(
      "SELECT * FROM formpessoafisica WHERE name = ? AND apelido = ? AND sexo = ?",
      [name, apelido, sexo]
    );

    res.send(results);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Erro ao buscar pessoa física" });
  }
});

// Obter todas as pessoas físicas
app.get("/getCards/pessoa-fisica", async (req, res) => {
  try {
    const [results] = await pool.query("SELECT * FROM formpessoafisica");
    res.send(results);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Erro ao buscar pessoas físicas" });
  }
});

// Editar
app.put("/edit/pessoa-fisica", async (req, res) => {
  try {
    const { id, name, sexo } = req.body;

    const [result] = await pool.query(
      "UPDATE formpessoafisica SET name = ?, sexo = ? WHERE id = ?",
      [name, sexo, id]
    );

    if (result.affectedRows === 0) {
      res.status(404).send({ message: "Pessoa física não encontrada" });
    } else {
      res.send({ message: "Pessoa física editada com sucesso!" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Erro ao editar pessoa física" });
  }
});

// Excluir
app.delete("/delete/pessoa-fisica/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await pool.query("DELETE FROM formpessoafisica WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      res.status(404).send({ message: "Pessoa física não encontrada" });
    } else {
      res.send({ message: "Pessoa física excluída com sucesso!" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Erro ao excluir pessoa física" });
  }
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
