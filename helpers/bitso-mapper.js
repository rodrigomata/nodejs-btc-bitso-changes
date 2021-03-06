'use strict';
/**
 * bitso-mapper.js
 * @author Rodrigo Mata
 * @description Maps Bitso data to Domain structure
 */

const ObjectMapper = require('two-way-object-mapper');

module.exports = {

  build: (() => {
    return new ObjectMapper()
      .addPropertyMapping({from: 'payload.book', to: 'currency'})
      .addPropertyMapping({from: 'payload.last', to: 'value'})
      .addPropertyMapping({from: 'payload.created_at', to: 'created_at'});
  })()

};