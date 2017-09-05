const express = require('express');
const router = express.Router();
const colorsArr = require('../colors');

router.get('/colors', (req, res) => {
  res.locals.colors = colorsArr;
  res.render('pages/colors');
});

module.exports = router;

