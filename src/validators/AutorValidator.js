const yup = require('yup')

const autorSchema = yup.object().shape ({
    nome: yup
      .string ("Por favor, insira um nome válido.")
      .required ("Campo obrigatório!"),
  
    nacionalidade: yup
      .string ("Por favor, insira a nacionalidade do autor.")
      .required ("Campo obrigatório."),
  
    nascimento: yup
      .date("Por favor, insira uma data válida.")
      .required ("Campo obrigatório!"),
 
    sobre: yup
      .string("Por favor, insira algo sobre o autor/a.")
      .required ("Campo obrigatório!"),
})

function autorValidator (req, res, next) {
  autorSchema
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
        mensagem: "Erro na validação dos campos.",
        erros
      }
    )}
)
}

module.exports = { autorValidator }