/**
 * Archivo: controllers/trilhass.controller.js
 * Descripcion: archivo responsable por la logica de las rutas
 * fecha: 22/09/2020
 * Autor: Danilson Nunes
 */

const db = require("../config/database");

// ===> metodo responsable por dar entrada a una nueva trilha

exports.createTrilha = async (req, res) => {
  const { nome, descricao, info_onibus, localizacao, cadeirante } = req.body;
  const {
    rows,
  } = await db.query(
    "INSERT INTO trilhas (nome, descricao, info_onibus, localizacao, cadeirante) VALUES($1, $2, $3, $4, $5)",
    [nome, descricao, info_onibus, localizacao, cadeirante]
  );

  res.status(201).send({
    message: "Trilha registrada satisfactoriamente!",
    body: {
      Trilha: { nome, descricao, info_onibus, localizacao, cadeirante },
    },
  });
};

// ===> metodo responsable por listar todas las trilhas

exports.listAllTrilhas = async (req, res) => {
  const response = await db.query("SELECT * FROM trilhas ORDER BY nome ASC");
  res.status(200).send(response.rows);
};

// ===> metodo reponsable por listar las trilhas por id

exports.listTrilhasById = async (req, res) => {
  const trilhaId = parseInt(req.params.id);
  const response = await db.query(
    "SELECT * FROM trilhas WHERE trilha_id = $1",
    [trilhaId]
  );
  res.status(200).send(response.rows);
};

// ===> metodo responsable por actualizar una trilha dependiendo del id (trilha_id)

exports.actualizarTrilhasById = async (req, res) => {
  const trilhaId = parseInt(req.params.id);
  const { nome, descricao, info_onibus, localizacao, cadeirante } = req.body;

  const response = await db.query(
    "UPDATE trilhas SET nome = $1, descricao = $2, info_onibus = $3, localizacao = $4, cadeirante = $5 WHERE trilha_id = $6",
    [nome, descricao, info_onibus, localizacao, cadeirante, trilhaId]
  );
  res.status(200).send({ message: "trilha atualizada satisfatoriamente!" });
};

// ===> metodo responsable por deletar una trilha dependiendo del id (trilha_id)

exports.deleteTrilhaById = async (req, res) => {
  const trilhaId = parseInt(req.params.id);

  await db.query("DELETE FROM trilhas WHERE trilha_id = $1", [trilhaId]);

  res.status(200).send({ message: "Trilha deletatada satisfatorimente!" });
};
