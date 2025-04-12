var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', async function(req, res, next) {
  try {
    const { username, password } = req.body;

    // Generamos un salt y hash con bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Guardamos en la base de datos
    const newUser = new User({ username, password: hashedPassword });
