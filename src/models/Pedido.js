const mongoose = require('mongoose')

const pedidoSchema = new mongoose.Schema ({
  cliente: {
    type: mongoose.Types.ObjectId,
    ref: 'cliente',
    required: true
  },

  livro: [{
    type: mongoose.Types.ObjectId,
    ref: 'livro',
    required: true
  }],

  total: {
    type: Number,
    required: true
  },

  data_retirada: {
    type: Date,
    required: true
  },

  data_retorno: {
    type: Date,
    required: true
  }

}, {timestamps:true})

const Pedido = mongoose.model('pedido', pedidoSchema)

module.exports = Pedido