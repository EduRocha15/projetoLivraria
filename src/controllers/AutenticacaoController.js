require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Cadastro = require('../models/Funcionario.js')

const JWT_SECRET = process.env.JWT_SECRET

async function cadastrar (req, res) {
  const { nome, codigo, senha } = req.body
  const verificarCadastro = await Cadastro.findOne({ codigo })
  if (verificarCadastro) {
    return res.status(400).json({
      mensagem: "Cadastro já existe!"
    })
  }

  const hash = await bcrypt.hash(senha, 10)

  const novoCadastro = new Cadastro({
    nome,
    codigo,
    senha: hash
  })
  
  await novoCadastro.save()

  res.status(201).json({
    mensagem: "Cadastro feito com sucesso!"
  })
}

async function login (req, res) {
  const { codigo, senha } = req.body
  const funcionario = await Cadastro.findOne({ codigo })
  if (!funcionario) {
    return res.status(404).json({
      mensagem: "Cadastro não existe!"
    })
  }

  const senhaValida = await bcrypt.compare(senha, funcionario.senha)
  if (!senhaValida) {
    return res.status(401).json({
      mensagem: "Usuário ou senha inválido!"
    })
  }

  const token = jwt.sign({codigo: funcionario.codigo}, JWT_SECRET)

  res.json({
        mensagem: "Login efetuado com sucesso!",
        token
    })

}

module.exports = {
  cadastrar,
  login
}