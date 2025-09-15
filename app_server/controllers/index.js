const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/main');
const ctrlContact = require('../controllers/contact');

// Homepage
router.get('/', ctrlMain.index);

// Contact page
router.get('/contact', ctrlContact.contact);

module.exports = router;