const Usuario = require('../models/Usuario');

const UsuarioController = {

    index: async (_req, res) => {
        const usuarios = await Usuario.find();

        return res.status(200).json(usuarios);
    },

    create: async (req, res) => {
        const { nome, idade, hobbies } = req.body;

        const novoUsuario = await Usuario.create({
            nome,
            idade,
            hobbies
        });

        return res.status(201).json(novoUsuario);
    },

    update: async (req, res) => {
        const { id } = req.params;
        const { nome, idade } = req.body;

        const usuario = await Usuario.findByIdAndUpdate(
            id, 
            {
                nome,
                idade
            }, {
                new: true
            }
        );

        return res.status(201).json(usuario);
    },

    delete: async (req, res) => {
        const { id } = req.params;

        const usuario = await Usuario.findByIdAndDelete(id);

        return res.sendStatus(204);
    }
}

module.exports = UsuarioController;