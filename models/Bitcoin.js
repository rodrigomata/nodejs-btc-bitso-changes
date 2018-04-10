'use strict';
/**
 * Bitcoin.js
 * @author Rodrigo Mata
 * @description Bitcoin Model
 */

const mongoose = require('mongoose');

const BitcoinSchema = new mongoose.Schema({
  currency: String,
  value: Number,
  created_at: Date
});

mongoose.model('Bitcoin', BitcoinSchema);