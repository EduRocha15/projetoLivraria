const express = require('express')
const router = express.Router()

const autenticacaoController = require('../controllers/AutenticacaoController')

const { validarLogin, validarRegistro } = require('../validators/AutenticacaoValidator')

router.post('/auth/registrar', validarRegistro, autenticacaoController.cadastrar)
router.post('/auth/login', validarLogin, autenticacaoController.login)

module.exports = router