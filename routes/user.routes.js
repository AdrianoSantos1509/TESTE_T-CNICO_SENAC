const express = require('express')
const userController = require('../controller/user.controller')

const router = express.Router()

// Buscar todos os alunos
router.get('/', userController.findAll)
router.post('/', userController.create)
router.get('/:id', userController.findById)
router.put('/:id', userController.update)
router.delete('/:id', userController.delete)

module.exports = router