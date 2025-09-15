const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/main');
const ctrlContact = require('../controllers/contact');
const ctrlAbout = require('../controllers/about');

// Homepage
router.get('/', ctrlMain.index);

// Contact page
router.get('/contact', ctrlContact.contact);

// About page
router.get('/about', ctrlAbout.about);

module.exports = router;