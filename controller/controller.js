const Vaga = require('../models/vaga.js')

exports.novasVagas = async (req, res) => {
    try {
        const vaga = await Vaga.create(req.body);
        res.status(201).send(vaga);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.vagas = async (req, res) => {
    try {
        const data = await Vaga.findAll()
        res.status(200).send(data);
    } catch (error) {
        console.log(error)
        res.status(500).send("error");
    }
};

exports.detalhes = async (req, res) => {
    try {
        const vaga = await Vaga.findByPk(req.params.id);
        if (!vaga) {
            return res.status(404).send({ error: 'Vaga não encontrada' });
        }
        res.status(200).send(vaga);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

exports.atualizar = async (req, res) => {
    try {
        const vaga = await Vaga.findByPk(req.params.id);
        if (!vaga) {
            return res.status(404).send({ error: 'Vaga não encontrada' });
        }
        await vaga.update(req.body);
        res.status(200).send(vaga);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

exports.deletar = async (req, res) => {
    try {
        const vaga = await Vaga.findByPk(req.params.id);
        if (!vaga) {
            return res.status(404).send({ error: 'Vaga não encontrada' });
        }
        await vaga.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

exports.filtrarCargos = async (req, res) => {
    try {
        const vagas = await Vaga.findAll({ where: { cargo: req.params.cargo } });
        res.status(200).send(vagas);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

exports.cidade = async (req, res) => {
    try {
        const vagas = await Vaga.findAll({ where: { cidade: req.params.cidade } });
        res.status(200).send(vagas);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};
