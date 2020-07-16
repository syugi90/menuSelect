var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  const twits = [];
  res.render('main', {
    title: 'Express - title',
    twits,
  });
});

module.exports = router;
