const mongoose = require('mongoose')

const clienteSchema = new mongoose.Schema({
  
  cpf: {
    type: Number,
    required: true
  },

  nome: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  telefone: {
    type: String,
    required: true
  },

  endereco: {
    cep: String,
    cidade: String,
    bairro: String,
    rua: String,
    numero: String
  }
}, {timestamps: true})

const Cliente = mongoose.model('cliente', clienteSchema)

module.exports = Cliente