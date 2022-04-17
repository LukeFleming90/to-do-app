// /routes/api/users.js
const express = require('express');
const router = express.Router();
const todoCtrl = require('../../controllers/api/todo');

// POST /api/users
router.post('/', todoCtrl.create);

module.exports = router;