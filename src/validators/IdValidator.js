const mongoose = require('mongoose')

function idValidator(req, res, next) {

  const isValid = mongoose.Types.ObjectId.isValid(req.params.id)

  if(isValid){
    next()
  }  else {
    res.status(400).json("Id inválido!")
  }
  
}

module.exports = {idValidator}