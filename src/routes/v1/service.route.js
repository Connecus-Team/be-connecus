const express = require('express');

const serviceController = require('../../controllers/service.controller');

const router = express.Router();

router.route('/funding').get(serviceController.getFunding).post(serviceController.insertFunding);
router.route('/voting').get(serviceController.getVoting).post(serviceController.insertVoting);
router.route('/task').get(serviceController.getTask).post(serviceController.insertTask);

module.exports = router;
