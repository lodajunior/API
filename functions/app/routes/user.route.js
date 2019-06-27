const controller = require('../controllers/user.controller');
const route = require('express').Router();

module.exports = route
    .get(`/`, controller.get)
    .get(`/:id`)
    .post(`/`, controller.post)
    .put(`/:id`, controller.put)
    .delete(`/:id`, controller.delete);