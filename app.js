const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const Router = require('./config/routes');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'pug')
  .get('/', Router)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));
