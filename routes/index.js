const router = require('express').Router();
const path = require('path');
const apiController = require('../controllers/apiController');

router.route('/getItems/:id')
        .get(apiController.getItems)

module.exports = router;