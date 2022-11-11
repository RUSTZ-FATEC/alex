const express = require('express');
const router = express.Router();

const keywordController = require('../controllers/keywordController');

router.get('/getKey', keywordController.getKey);
router.post('/postKey', keywordController.postKey);

module.exports = router;