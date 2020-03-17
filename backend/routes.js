const express = require('express');
const WalletController = require('./app/controllers/WalletController');

const router = new express.Router();

router.get('/api', WalletController.index);

router.post('/api', WalletController.create);

router.put('/api/:id', WalletController.update);

router.delete('/api/:id', WalletController.destroy);

module.exports = router;