const reviewService = require('../services/review.service');

class ReviewController {

  // Buscar todas as reviews
  async findAll(req, res) {
    try {
      const reviews = await reviewService.findAllService();
      res.status(200).json(reviews);
    } catch (error) {
      res.status(500).json({ error: "Erro interno ao buscar reviews." });
    }
  }

  // Criar review
  async create(req, res) {
    try {
      const review = await reviewService.createReview(req.body);
      res.status(201).json(review);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Buscar review por ID
  async findById(req, res) {
    try {
      const { id } = req.params;
      const review = await reviewService.getReviewById(id);

      if (!review) {
        return res.status(404).json({ error: "Review não encontrada." });
      }

      res.status(200).json(review);
    } catch (error) {
      res.status(400).json({ error: "ID inválido ou erro na busca." });
    }
  }

  // Atualizar review
  async update(req, res) {
    try {
      const { id } = req.params;
      const reviewAtualizada = await reviewService.updateService(id, req.body);
      res.status(200).json(reviewAtualizada);
    } catch (error) {
      res.status(400).json({ error: error.message || "Erro ao atualizar review." });
    }
  }

  // Deletar review
  async delete(req, res) {
    try {
      const { id } = req.params;
      const resultado = await reviewService.deleteService(id);
      res.status(200).json(resultado);
    } catch (error) {
      res.status(400).json({ error: error.message || "Erro ao deletar review." });
    }
  }

}

module.exports = new ReviewController();