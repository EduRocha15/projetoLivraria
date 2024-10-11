const express = require('express')

const app = express()
const PORT = 3000

// Conexão com DB
const DBconnection = require('./database/connection')
DBconnection()

// Middleware
app.use(express.json())

const authRoutes = require('./routes/autenticacao.routes')
app.use(authRoutes)

const { validarToken } = require('./validators/AutenticacaoValidator')

const routes = require('./routes/routes')
app.use("/", validarToken, routes)

app.listen(PORT, () => {
  console.log ({mensagem: `API iniciada em http://localhost:${PORT}`})
})