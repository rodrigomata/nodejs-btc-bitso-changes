'use strict';
/**
 * globals.js
 * @author Rodrigo Mata
 * @description File that holds global variables
 */

// Extract variables from process.env
const { MONGO_URI } = process.env;

module.exports = {
  API: {
    bitso: 'https://api.bitso.com/v3/ticker/?book=btc_mxn'
  },
  mongoURI: MONGO_URI
};