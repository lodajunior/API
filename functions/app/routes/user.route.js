const userController = require('../controllers/user.controller').default;
const route = require('express').Router();

module.exports = route.get(`/`).get(`/:id`).post(`/`).put(`/:id`).delete(`/:id`);