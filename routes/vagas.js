const express = require('express');
const { novasVagas, vagas, detalhes, atualizar, deletar, filtrarCargos, cidade } = require('../controller/controller');
const router = express.Router();

router.get("/vagas", vagas)
router.post("/NovaVagas", novasVagas)
router.get("/vagas/:id", detalhes)
router.put("/vagas/:id", atualizar)
router.delete("/vagas/:id", deletar)
router.get("/cargo/:cargo", filtrarCargos)
router.get("/localizacao/:cidade", cidade)



module.exports = router

























