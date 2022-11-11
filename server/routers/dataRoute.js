const express = require('express');
const router = express.Router();

const dataController = require('../controllers/dataController');

router.get('/getData', dataController.getData);
router.post('/postData', dataController.postData);

module.exports = router;