const { Wallet } = require('../models');

module.exports = {

    index(req, res) {
        Wallet.findAll({})
            .then(wallets => res.json({
                error: false,
                data: wallets
            }))
            .catch(error => res.json({
                error:true,
                data: [],
                error: error
            }));
    },

    create(req, res) {
        const { date, description, amount, wallet_type } = req.body;
        Wallet.create({
            date, description, amount, wallet_type
        })
        .then(wallet => res.status(201).json({
            error: false,
            data: wallet,
            message: "new wallet has been created"
        }))
        .catch(error => res.json({
            error:true,
            data: [],
            error: error
        }));
    },

    update(req, res) {
        const wallet_id = req.params.id;

        const { date, description, amount, wallet_type } = req.body;

        Wallet.update({
            date, description, amount, wallet_type
        }, {
            where: {
                id: wallet_id
            }
        })
        .then(wallet => res.status(201).json({
            error: false,
            data: wallet,
            message: 'wallet has been updated'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
    },

    destroy(req, res) {
        const wallet_id = req.params.id;

        Wallet.destroy({ where: {
            id: wallet_id
        }})
        .then(status => res.status(201).json({
            error: false,
            message: 'wallet has been deleted'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
    }
}