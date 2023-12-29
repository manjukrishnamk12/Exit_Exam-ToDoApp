const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const app = new express();
require('dotenv').config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
require("./db/connect");

const todorouter= require('./routes/ToDo_crud');
app.use('/todo', todorouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
})