const yup = require('yup')
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET

const registroSchema = yup.object().shape({
  nome: yup
    .string("Por favor, insira seu nome.")
    .required("Campo obrigatório!"),
  
  codigo: yup
    .string("Por favor, isnira seu codigo de funcionario.")
    .required("Campo obrigatório!"),

  senha: yup
    .string("Por favor, insira uma senha.")
    .required("Campo obrigatório!"),
})

function validarRegistro (req, res, next) {
  registroSchema
    .validate(req.body, {abortEarly: false})
    .then(() => next())
    .catch(err => {
      const errors = err.inner.map(e => {
        const erro = {
          campo: e.path,
          erros: e.errors
        }
        return erro
      })
      res.status(400).json({
            mensagem: "Falha na validação dos campos",
            erros: errors
        })
    })
}

const loginSchema = yup.object().shape({
  codigo: yup
    .string("Digite seu código de vendedor.")
    .required("Campo obrigatório!"),

  senha: yup
    .string("Digite sua senha cadastrada.")
    .required("Campo obrigatório"),
})

function validarLogin (req, res, next) {
  loginSchema
    .validate(req.body, {abortEarly: false})
    .then(() => next())
    .catch(err => {
      const errors = err.inner.map(e => {
        const erro = {
          campo: e.path,
          erros: e.errors
        }
        return erro
      })
      res.status(400).json({
            mensagem: "Falha na validação dos campos",
            erros: errors
        })
    })
}

async function validarToken (req, res, next) {
  try {
    const authHeader = req.headers['authorization']
    const separator = authHeader.split(' ')
    const token = separator[1]

    jwt.verify(token, JWT_SECRET)
    next()
  } catch (error) {
      return res.status(401).json({
        mensagem: "Acesso negado!"
    })
  }
}

module.exports = {
  validarRegistro,
  validarLogin,
  validarToken
}