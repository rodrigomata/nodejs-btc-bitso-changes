const express = require('express');
const path = require('path');
const requireDir = require('require-dir');
const mongoose = require('mongoose');
const cron = require('node-cron');

const PORT = process.env.PORT || 5000;

// Load Globals
const globals = require('./config/globals');
// Load Models
requireDir('./models');

// DB Connection
mongoose.connect(globals.mongoURI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// Only work when connected to the DB
db.once('open', () => {
  express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'pug')
    .use(require('./config/routes'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));

  // Start fetching from Bitso API
  const BitsoService = require('./services/BitsoService');
  cron.schedule('* * * * *', () => {
    console.log('running a task every minute');
    BitsoService.fetch();
  });
});
