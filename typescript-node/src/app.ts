// import * as express from 'express';
import express = require('express');
const app = express();
app.use('/', (req, res, next) => {
  console.log('Good!');
  next();
});
app.get('/', (req, res, next) => {
  res.send('<hq>Hello</hq>');
});
// app.use('/', (err, req, res, next) => {
//   next();
// });
app.listen(3000);
