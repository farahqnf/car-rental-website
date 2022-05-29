const userRepository = require("../repositories/userRepository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const res = require("express/lib/response");
const secret = "secret";
// const { getMemberByToken } = require("../controllers/api/v1/userController");

module.exports = {
    async register(data) {
        data.password = await this.encryptPassword(data.password);
        return userRepository.register(data);
    },

    async login(data) {
        data.email = data.email.toLowerCase();

        const user = await userRepository.findByEmail(data.email);

        if (!user) {
            throw new Error('Email tidak ditemukan');
        }

        const isPasswordCorrect = await this.checkPassword(
            user.password,
            data.password
        );

        if (!isPasswordCorrect) {
            throw new Error('Password salah');
        }

        const token = jwt.sign({ user }, secret);
        res.json({ user, token });
    },

    async encryptPassword(password) {
        return bcrypt.hashSync(password, 10);
    },

    async checkPassword(encryptedPassword, bodyPassword) {
        return bcrypt.compare(
            bodyPassword,
            encryptedPassword,
        );
    },

    // async createToken(data) {
    //     return jwt.sign(data, `${process.env.JWT_SECRET}` || "Secret");
    // },

    findById(email) {
        return userRepository.getById(email);
    },

}