'use strict';
/**
 * BitsoService.js
 * @author Rodrigo Mata
 * @description Handles Bitso related services
 */

const axios = require('axios');

const globals = require('../config/globals');
const BitsoMapper = require('../helpers/bitso-mapper');

module.exports = {
  // Fetches information from Bitso API
  fetch: () => {
    axios.get(globals.API.bitso)
      .then(response => {
        console.log("raw data", response);
        const data = BitsoMapper.map(response);
        console.log("filtered data", data);
      })
      .catch(error => console.error('Error fetching Bitso API'));
  }
};