const mongoose = require('mongoose')

require('dotenv').config()

const User = process.env.DB_USER
const Password = process.env.DB_PASS
const Host = process.env.DB_HOST
const Name = process.env.DB_NAME

function main () {
  mongoose.connect(`mongodb+srv://${User}:${Password}@${Host}/${Name}?retryWrites=true&w=majority`)
    .then ( () => console.log("Conectado ao banco de dados!"))
    .catch ( err => {
      console.log("Falha ao conectar com o banco de dados: ", err)
    })
}

module.exports = main