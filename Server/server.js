require('dotenv').config();
const express = require('express');
const connectDB = require('./src/db/db');

connectDB();

express().listen(3000, ()=>{ console.log("Server is Running!") });