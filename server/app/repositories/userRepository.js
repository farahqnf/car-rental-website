const { Member } = require("../models");

module.exports = {
  register(data) {
    return Member.create(data);
  },

  findByEmail(email) {
    return Member.findOne({
      where: { email }
    });
  },

  getMemberByToken(token) {
    return Member.findByPk({
      where: {
        token: token
      }
    });
  },

  getById(id) {
    return Member.findByPk(id);
  },
};