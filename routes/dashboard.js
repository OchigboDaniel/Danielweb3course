var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', async function(req, res, next) {
  return res.render('dashboard');
});


module.exports = router;