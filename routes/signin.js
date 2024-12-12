var express = require('express');
var router = express.Router();
const { getBalance} = require('../provider')

router.get('/', function(req, res, next) {
    console.log("Working")
    return res.render('signIn');
  });

router.post('/', async (req, res) => {
    const wallet = req.body.wallet;

    if (!wallet){
        return res.status(400).send('Invalid wallet address')
    }

    try {
        const balance = await getBalance(wallet);

        return res.render('index',  { title: 'Well come', wallet_balance: wallet });
    } catch (error) {
        res.status(500).send('Error fetching wallent balance, check the wallet address')        
    }    
  });

module.exports = router;