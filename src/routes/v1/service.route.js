const express = require('express');

const serviceController = require('../../controllers/service.controller');

const router = express.Router();

router.route('/funding').post(serviceController.insertFunding);
router.route('/voting').post(serviceController.insertVoting);
router.route('/task').post(serviceController.insertTask);

module.exports = router;
