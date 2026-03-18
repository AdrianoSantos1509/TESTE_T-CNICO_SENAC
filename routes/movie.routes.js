const express = require('express');
const movieController = require('../controller/movie.controller');

const router = express.Router();

router.get('/', movieController.findAll);
router.post('/', movieController.create);
router.get('/:id', movieController.findById);
router.put('/:id', movieController.update);
router.delete('/:id', movieController.delete);

module.exports = router;