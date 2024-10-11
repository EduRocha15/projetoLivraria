const yup = require('yup')

const clienteSchema = yup.object().shape({

  cpf: yup
    .number("Por favor, insira o cpf do cliente.")
    .required("Campo obrigatório!"),

  nome: yup
    .string("Por favor, insira nome do cliente.")
    .required("Campo obrigatório!"),

  email: yup
    .string("Insira um email válido.")
    .email("Email invalido.")
    .required("Campo obrigatório!"),

  telefone: yup
    .string("Por favor insira o telefone da editora.")
    .required("Campo obrigatório!"),

})

function clienteValidator (req, res, next) {
  clienteSchema
    .validate(req.body, {abortEarly: false})
    .then(() => next())
    .catch(err => {
      const erros = err.inner.map(e => {
        const erro = {
          campo: e.path,
          erros: e.erros
        }
        return erro
      })
      res.status(400).json(
        {
          mensagem: "Erro na validação dos campos",
          erros
        }
      )}
    )
}

module.exports = { clienteValidator }