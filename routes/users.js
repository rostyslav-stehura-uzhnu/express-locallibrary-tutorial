var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/cool-users', function(req, res, next) {
  const coolUsers = ['Вовій', 'Стасян', 'Васька', 'Ройс Ройс'];
  res.render('cool-users', { users: coolUsers });
});

module.exports = router;
