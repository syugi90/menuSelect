var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('main', {
    title: 'menu select',
  });
});

module.exports = router;
