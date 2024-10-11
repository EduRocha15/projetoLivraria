const mongoose = require('mongoose')

const editoraSchema = new mongoose.Schema ({

  nome: {
    type: String,
    required: true
  },

  sede: {
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

  livros: [{
    type: mongoose.Types.ObjectId,
    ref: 'livro'
  }]
}, {timestamps: true})

const Editora = mongoose.model ('editora', editoraSchema)

module.exports = Editora