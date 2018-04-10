'use strict';
/**
 * CurrencyController.js
 * @author Rodrigo Mata
 * @description Handles Currency related endpoints
 */
const mongoose = require('mongoose');
const moment = require('moment');

const Bitcoin = mongoose.model('Bitcoin');

module.exports = {
  // Gets information for the index endpoint
  index: (req, res) => {
    let before = new Date();
    before.setDate(before.getDate() - 1);
    Bitcoin.find({ created_at: { $gt: before }}, (err, results) => {
      if(err) throw err;
      const labels = results.map(item => moment(item.created_at).fromNow());
      const data = results.map(item => item.value);
      const title = 'Bitcoin\'s Today History';
      res.render('pages/index', { data, labels, title });
    });
  }
};