'use strict';
/**
 * routes.js
 * @author Rodrigo Mata
 * @description Handles main routing
 */

const router = require('express').Router();

const CurrencyController = require('../controllers/CurrencyController');

// Index 
router.get('/', CurrencyController.index);

module.exports = router;