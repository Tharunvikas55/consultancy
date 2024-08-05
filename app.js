const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const path = require('path');
const connectDatabase = require('./config/connectDatabase');
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });
connectDatabase();

const products = require('./routes/product');
const auth=require('./routes/auth')
const CategoryModel = require('./models/CategoryModel');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.set('view engine', 'ejs');

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});




app.use('/api/v1', products)
app.use('/api/v1',auth)

// Fetch categories and store them in app.locals
CategoryModel.find()
  .then(categories => {
    app.locals.categories = categories;
  })
  .catch(err => {
    console.log("Error fetching categories: ", err);
  });

app.listen(process.env.PORT, () => {
  console.log(`Server listening to Port ${process.env.PORT} in ${process.env.NODE_ENV}`);
});

// Global Error Handling Middleware (Optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
