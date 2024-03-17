"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as express from 'express';
const express = require("express");
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
