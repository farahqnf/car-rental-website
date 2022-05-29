const { Cars } = require("../models");

module.exports = {
  findAll() {
    return Cars.findAll();
  },

  create(data) {
    return Cars.create(data);
  },

  update(id, updateArgs) {
    return Cars.update(updateArgs, {
      where: {
        id,
      },
    });
  },

  delete(id) {
    return Cars.destroy({
      where: { id }
    });
  },

  find(id) {
    return Cars.findByPk(id);
  },

  getTotalPost() {
    return Cars.count();
  },
};
