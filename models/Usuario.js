const { Schema, model } = require('mongoose');

const Usuario = new Schema(
    {
        nome: {
            type: 'String',
            required: true
        },
        idade: {
            type: 'Number'
        },
        hobbies: []
    },
    {
        timestamps: true
    }
);

module.exports = model('Usuario', Usuario);