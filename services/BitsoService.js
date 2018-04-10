'use strict';
/**
 * BitsoService.js
 * @author Rodrigo Mata
 * @description Handles Bitso related services
 */

const axios = require('axios');
const mongoose = require('mongoose');

const globals = require('../config/globals');
const BitsoMapper = require('../helpers/bitso-mapper');

const Bitcoin = mongoose.model('Bitcoin');

module.exports = {
  // Fetches information from Bitso API
  fetch: () => {
    axios.get(globals.API.bitso)
      .then(({ data }) => {
        const filteredData = BitsoMapper.build.map(data);

        const bitcoin = new Bitcoin();
        Object.assign(bitcoin, filteredData);
        bitcoin.save().then(() => console.log('Bitcoin info saved'));
      })
      .catch(error => console.error('Error fetching Bitso API', error));
  }
};