const { Schema, model } = require('mongoose');

const Produto = new Schema(
    {
        nome: {
            type: 'String',
            required: true
        },
        descricao: 'String',
        quantidade: 'Number',
        preco: 'Decimal'
    },
    {
        timestamps: true
    }
);

module.exports = model('Produto', Produto);