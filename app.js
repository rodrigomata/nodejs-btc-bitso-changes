const express = require('express');
const path = require('path');
const requireDir = require('require-dir');

const PORT = process.env.PORT || 5000;

// Load Globals
require('./config/globals');
// Load Models
requireDir('./models');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'pug')
  .use(require('./config/routes'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));
