'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static('public'));

app.use('/', (req,res,next)=>{
  res.sendStatus(404);
});

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
