const Pedido = require('../models/Pedido')

async function criar (req, res) {
  const pedido = new Pedido(req.body)
  const novoPedido = await pedido.save()

  res.status(201).json({
    mensagem: "Pedido criado!",
    novoPedido
  })
}

async function buscarTodos (req, res) {
  const pedido = await Pedido.find()
  .populate('cliente', 'nome')
  .populate('livro', 'titulo')

  res.status(200).json(pedido)
}

async function buscarPorId (req, res) {
  const pedidos = await Pedido.findById(req.params.id)
  .populate('cliente', 'nome')
  .populate('livro', 'titulo')
  if (pedidos) {
    res.status(200).json(pedidos)
  } else {
    res.status(404).json({
      mensagem: "Pedido não encontrado!"
    })
  }
}

async function atualizar (req, res) {
  const pedidoAtualizado = await Pedido.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .populate('cliente', 'nome')
  .populate('livro', 'titulo')
  if (pedidoAtualizado) {
    res.status(200).json({
      mensagem: "Pedido atualizado!",
      pedidoAtualizado
    })
  } else {
    res.status(404).json({
      mensagem: "Pedido não encontrado!"
    })
  }
}

async function excluir (req, res) {
  const pedidoDel = await Pedido.findByIdAndDelete(req.params.id)

  if (pedidoDel) {
    res.status(200).json({
      mesangem: "Pedido excluido!"
    })
  } else {
    res.status(404).json({
      mensagem: "Pedido não encontrado!"
    })
  }
}

module.exports = {
  criar,
  buscarTodos,
  buscarPorId,
  atualizar,
  excluir
}