'use strict';
/**
 * CurrencyController.js
 * @author Rodrigo Mata
 * @description Handles Currency related endpoints
 */
const mongoose = require('mongoose');

const Bitcoin = mongoose.model('Bitcoin');

module.exports = {
  // Gets information for the index endpoint
  index: (req, res) => {
    Bitcoin.find((err, results) => {
      if(err) throw err;
      results.title = 'Titulo Ejemplo';
      results.message = 'Mensaje ejemplo';
      res.render('pages/index', results);
    });
  }
};