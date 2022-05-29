const postRepository = require("../repositories/postRepository");

module.exports = {
  async list() {
    try {
      const data = await postRepository.findAll();
      const dataCount = await postRepository.getTotalPost();

      return {
        data: data,
        count: dataCount,
      };
    } catch (err) {
      throw err;
    }
  },

  create(data) {
    return postRepository.create(data);
  },

  update(id, requestBody) {
    return postRepository.update(id, requestBody);
  },

  delete(id) {
    return postRepository.delete(id);
  },

  get(id) {
    return postRepository.find(id);
  },
};
