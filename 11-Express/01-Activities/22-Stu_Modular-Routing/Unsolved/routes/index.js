// TODO: Import express
const express = require('express');

// TODO: Create app variable to create an instance of express()
const app = express.Router();

// TODO: Import modules for tips/feedback
const tipRoutes = require('./tips');
const feedbackRoutes = require('./feedback');

// TODO: Use our routes
app.use('/tips', tipRoutes);
app.use('./feedback', feedbackRoutes);

// TODO: Export app
module.exports = app;