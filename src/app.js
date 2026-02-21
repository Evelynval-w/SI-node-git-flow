const express = require('express');
const app = express();

// Middleware — allows app to read JSON from request body
app.use(express.json());

// Routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

app.use('/users', userRoutes);
app.use('/products', productRoutes);

// Health check route
app.get('/', (req, res) => {
  res.json({ message: 'API is running!' });
});

module.exports = app;