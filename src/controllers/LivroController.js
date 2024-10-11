const Livro = require('../models/Livro')

async function criar (req, res) {
  const livro = new Livro (req.body)
  const novoLivro = await livro.save()

  res.status(201).json({
    mensagem: "Novo livro cadastrado!",
    novoLivro
  })
}

async function buscarTodos (req, res) {
  const livros = await Livro.find()
    .populate('autor', 'nome')
    .populate('editora', 'nome')
    res.status(200).json(livros)
}

async function buscarPorId (req, res) {
  const livro = await Livro.findById(req.params.id)
    .populate('autor', 'nome')
    .populate('editora', 'nome')
  if (livro) {
    res.status(200).json(livro)
  } else {
    res.status(404).json({mensagem: "Livro não encontrado!"})
  }
}

async function atualizar (req, res) {
  const livroAtu = await Livro.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .populate('autor', 'nome')
    .populate('editora', 'nome')
  if (livroAtu) {
    res.status(200).json({
      mensagem: "Os dados do livro foram atualizados.",
      livroAtu
    }) 
  } else {
    res.status(404).json({mensagem: "Livro não encontrado!"})
  }
}

async function excluir (req, res) {
  const livroDel = await Livro.findByIdAndDelete(req.params.id)
  if (livroDel) {
    res.status(200).json({mesnagem: "Livro excluido!"})
  } else {
    res.status(404).json({mesnagem: "Livro não encontrado."})
  }
}

module.exports = {
  criar,
  buscarTodos,
  buscarPorId,
  atualizar,
  excluir
}