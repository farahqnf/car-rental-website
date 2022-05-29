/**
 * @file Bootstrap express.js server
 * @author Fikri Rahmat Nurhidayat
 */

const express = require("express");
const morgan = require("morgan");
const router = require("../config/routes");
const cors = require('cors');
require('dotenv').config();

const app = express();

/** Install request logger */
app.use(morgan("dev"));

app.use(cors());

// views
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static('assets'));
app.set('views', path.join(__dirname, './views'))

/** Install JSON request parser */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/** Install Router */
app.use(router);

module.exports = app;
