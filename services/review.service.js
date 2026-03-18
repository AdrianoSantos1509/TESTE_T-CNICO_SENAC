const { Review } = require('../model');

class ReviewService {

  // Buscar todas as reviews
  async findAllService() {
    try {
      return await Review.findAll();
    } catch (error) {
      console.error("Erro no ReviewService (findAllService):", error);
      throw error;
    }
  }

  // Buscar review por ID
  async getReviewById(id) {
    try {
      return await Review.findByPk(id);
    } catch (error) {
      console.error("Erro no ReviewService (getReviewById):", error);
      throw error;
    }
  }

  // Criar review
  async createReview(data) {
    try {
      return await Review.create(data);
    } catch (error) {
      console.error("Erro no ReviewService (createReview):", error);
      throw error;
    }
  }

  // Atualizar review
  async updateService(id, data) {
    const review = await Review.findByPk(id);

    if (!review) {
      return null;
    }

    await review.update(data);
    return review;
  }

  // Deletar review
  async deleteService(id) {
    const review = await Review.findByPk(id);

    if (!review) {
      return null;
    }

    await review.destroy();
    return true;
  }
}

module.exports = new ReviewService();
