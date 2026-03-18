const userService = require('../services/user.service');

class UserController {

  // Buscar todos os usuários
  async findAll(req, res) {
    try {
      const users = await userService.findAllService();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Erro interno ao buscar usuários." });
    }
  }

  // Criar usuário
  async create(req, res) {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Buscar usuário por ID
  async findById(req, res) {
    try {
      const { id } = req.params;
      const user = await userService.getUserById(id);

      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado." });
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: "ID inválido ou erro na busca." });
    }
  }

  // Atualizar usuário
  async update(req, res) {
    try {
      const { id } = req.params;
      const userAtualizado = await userService.updateService(id, req.body);

      res.status(200).json(userAtualizado);
    } catch (error) {
      res.status(400).json({ error: error.message || "Erro ao atualizar usuário." });
    }
  }

  // Deletar usuário
  async delete(req, res) {
    try {
      const { id } = req.params;
      const resultado = await userService.deleteService(id);

      res.status(200).json(resultado);
    } catch (error) {
      res.status(400).json({ error: error.message || "Erro ao deletar usuário." });
    }
  }

}

module.exports = new UserController();