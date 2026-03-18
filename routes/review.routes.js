const express = require('express');
const reviewController = require('../controller/review.controller');

const router = express.Router();

router.get('/', reviewController.findAll);
router.post('/', reviewController.create);
router.get('/:id', reviewController.findById);
router.put('/:id', reviewController.update);
router.delete('/:id', reviewController.delete);

module.exports = router;