const yup = require('yup')

const editoraSchema = yup.object().shape({

  nome: yup
    .string("Por favor, insira o nome da editora.")
    .required("Campo obrigatório!"),

  sede: yup
    .string("Por favor, insira aonde fica a sede da editora.")
    .required("Campo obrigatório!"),

  email: yup
    .string("Insira um email válido.")
    .email("Email invalido.")
    .required("Campo obrigatório!"),

  telefone: yup
    .string("Por favor insira o telefone da editora.")
    .required("Campo obrigatório!"),

})

function editoraValidator (req, res, next) {
  editoraSchema
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

module.exports = { editoraValidator }