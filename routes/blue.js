const express = require('express');
const router = express.Router();
const colorsArr = require('../colors');

router.get('/blue', (req, res) => {
  res.locals.colors = colorsArr;
  res.render('pages/blue');
});

module.exports = router;

