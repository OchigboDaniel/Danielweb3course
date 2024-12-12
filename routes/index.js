var express = require('express');
var router = express.Router();


let activeAccount;

router.post('/update-account', (req, res) => {
  activeAccount = req.body.account;
  console.log('Received active account:', activeAccount);
  res.json({ status: 'success', account: activeAccount });
});


/* GET home page. */
router.get('/', async function(req, res, next) {
  
  res.render('index', { title: 'Connect Metamask to your web Applicatin'});
});


module.exports = router;
