const Cliente = require('../models/Cliente')

async function criar (req, res) {
  const cliente = new Cliente(req.body)
  const novoCliente = await cliente.save()

  res.status(201).json({
    mensagem: "Novo cliente cadastrado.",
    novoCliente
  })
}

async function buscarTodos (req, res) {
  const clientes = await Cliente.find()
  res.status(200).json(clientes)
}

async function buscarPorId (req, res) {
  const cliente = await Cliente.findById(req.params.id)
  if (cliente) {
    res.status(200).json(cliente)
  } else {
    res.status(404).json({
      mensagem: "Cliente não encontrado!"
    })
  }
}

async function atualizar (req, res) {
  const clienteAtu = await Cliente.findByIdAndUpdate(req.params.id, req.body, {new: true})
  if (clienteAtu) {
    res.status(200).json({
      mensagem: "Cliente atualizado!",
      clienteAtu
    })
  }
}

async function excluir (req, res) {
  const clienteDel = await Cliente.findByIdAndDelete(req.params.id)
  if (clienteDel) {
    res.status(200).json({
      mensagem: "Cliente excluído com sucesso!"
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