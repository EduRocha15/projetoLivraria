const yup = require('yup')

const schema = yup.object().shape({

  cliente: yup
    .string("Identifique o cliente.")
    .required("Campo obrigatório!"),

  livro: yup
    .string("Por favor, insira os livros.")
    .required("Campo obrigatório!"),

  total: yup
    .number("Digite a quantidade.")
    .required("Campo obrigatório!"),

  data_retirada: yup
    .date("Insira uma data válida.")
    .required("Campo obrigatório!"),

  data_retorno: yup
    .date("Insira uma data válida.")
    .required("Campo obrigatório!"),
})

function pedidoValidator (req, res, next) {
  schema
    .validate(req.body, {abortEarly: true})
    .then(() => next())
    .catch(err => {
      const erros = err.inner.map(e => {
        const erro = {
          campo: e.path,
          erros: e.erros
        }
      })
    })
}

module.exports = { pedidoValidator }
