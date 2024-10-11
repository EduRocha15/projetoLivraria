const mongoose = require('mongoose')

const cadastroSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },

  codigo: {
    type: String,
    required: true
  },

  senha: {
    type: String,
    required: true
  }
}, {timestamps: true})

const Cadastro = mongoose.model('cadastro', cadastroSchema)

module.exports = Cadastro