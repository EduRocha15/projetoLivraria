const mongoose = require('mongoose')

const livroSchema = new mongoose.Schema({
  
  titulo: {
    type: String,
    required: true
  },

  autor: {
    type: mongoose.Types.ObjectId,
    ref: 'autor',
    required: true
  },

  genero: {
    type: String,
    required: true
  },

  ano_publicacao: {
    type: Number,
    required: true
  },

  editora: {
    type: mongoose.Types.ObjectId,
    ref: 'editora',
    required: true
  }
}, {timestamps: true})

const Livro = mongoose.model('livro', livroSchema)

module.exports = Livro