const { Movie } = require('../model');

class MovieService {

  // Buscar todos os filmes
  async findAllService() {
    try {
      return await Movie.findAll();
    } catch (error) {
      console.error("Erro no MovieService (findAllService):", error);
      throw error;
    }
  }

  // Buscar filme por ID
  async getMovieById(id) {
    try {
      return await Movie.findByPk(id);
    } catch (error) {
      console.error("Erro no MovieService (getMovieById):", error);
      throw error;
    }
  }

  // Criar filme
  async createMovie(data) {
    try {
      return await Movie.create(data);
    } catch (error) {
      console.error("Erro no MovieService (createMovie):", error);
      throw error;
    }
  }

  // Atualizar filme
  async updateService(id, data) {
    const movie = await Movie.findByPk(id);

    if (!movie) {
      return null;
    }

    await movie.update(data);
    return movie;
  }

  // Deletar filme
  async deleteService(id) {
    const movie = await Movie.findByPk(id);

    if (!movie) {
      return null;
    }

    await movie.destroy();
    return true;
  }
}

module.exports = new MovieService();