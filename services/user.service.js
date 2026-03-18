const { User } = require('../model');

class UserService {

  // Buscar todos os usuários
  async findAllService() {
    try {
      return await User.findAll();
    } catch (error) {
      console.error("Erro no UserService (findAllService):", error);
      throw error;
    }
  }

  // Buscar usuário por ID
  async getUserById(id) {
    try {
      return await User.findByPk(id);
    } catch (error) {
      console.error("Erro no UserService (getUserById):", error);
      throw error;
    }
  }

  // Criar usuário
  async createUser(data) {
    try {
      return await User.create(data);
    } catch (error) {
      console.error("Erro no UserService (createUser):", error);
      throw error;
    }
  }

  // Atualizar usuário
  async updateService(id, data) {
    const user = await User.findByPk(id);

    if (!user) {
      return null;
    }

    await user.update(data);
    return user;
  }

  // Deletar usuário
  async deleteService(id) {
    const user = await User.findByPk(id);

    if (!user) {
      return null;
    }

    await user.destroy();
    return true;
  }
}

module.exports = new UserService();