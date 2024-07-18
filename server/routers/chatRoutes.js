const express = require('express');
const { getMessages, sendMessage } = require('../controllers/chatController');
const { authenticate } = require('../middleware/authMiddleware.js');

const router = express.Router();

router.get('/', authenticate, getMessages);
router.post('/', authenticate, sendMessage);

module.exports = router;
