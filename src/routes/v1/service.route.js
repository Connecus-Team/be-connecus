const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'update/');
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

const serviceController = require('../../controllers/service.controller');

const router = express.Router();

router.route('/funding').get(serviceController.getFunding).post(upload.array('file'), serviceController.insertFunding);
router.route('/voting').get(serviceController.getVoting).post(upload.array('file'), serviceController.insertVoting);
router.route('/task').get(serviceController.getTask).post(upload.array('file'), serviceController.insertTask);
router.route('/all-token').get(serviceController.getAllToken);
router
  .route('/token')
  .get(serviceController.getTokenInfoByTokenAddress)
  .post(upload.array('file'), serviceController.insertToken);

module.exports = router;
