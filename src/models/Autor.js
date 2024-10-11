const mongoose = require('mongoose')

const autorSchema = new mongoose.Schema ({
  nome:{
    type: String,
    required: true
  },

  nacionalidade:{
    type: String,
    required: true
  },

  nascimento:{
    type: Date,
    required: true
  },

  sobre:{
    type: String,
    required: true
  },
  
  obras:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'livro'
  }]
}, {timestamps: true})

const Autor = mongoose.model ('autor', autorSchema)

module.exports = Autor