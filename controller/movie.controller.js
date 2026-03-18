const movieService = require('../services/movie.service');

class MovieController {

  // Buscar todos os filmes
  async findAll(req, res) {
    try {
      const movies = await movieService.findAllService();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ error: "Erro interno ao buscar filmes." });
    }
  }

  // Criar filme
  async create(req, res) {
    try {
      const movie = await movieService.createMovie(req.body);
      res.status(201).json(movie);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Buscar filme por ID
  async findById(req, res) {
    try {
      const { id } = req.params;
      const movie = await movieService.getMovieById(id);

      if (!movie) {
        return res.status(404).json({ error: "Filme não encontrado." });
      }

      res.status(200).json(movie);
    } catch (error) {
      res.status(400).json({ error: "ID inválido ou erro na busca." });
    }
  }

  // Atualizar filme
  async update(req, res) {
    try {
      const { id } = req.params;
      const movieAtualizado = await movieService.updateService(id, req.body);

      res.status(200).json(movieAtualizado);
    } catch (error) {
      res.status(400).json({ error: error.message || "Erro ao atualizar filme." });
    }
  }

  // Deletar filme
  async delete(req, res) {
    try {
      const { id } = req.params;
      const resultado = await movieService.deleteService(id);

      res.status(200).json(resultado);
    } catch (error) {
      res.status(400).json({ error: error.message || "Erro ao deletar filme." });
    }
  }

}

module.exports = new MovieController();