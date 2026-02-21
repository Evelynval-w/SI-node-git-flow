const Product = require('../models/product'); // capital P

module.exports = {
  create: async (req, res) => {
    try {
      const { name, price } = req.body;
      if (!name || !price) {
        return res.status(400).json({ error: 'Name and price are required' });
      }
      const product = await Product.create(name, price); // capital P, both args
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const { name, price } = req.body;
      if (!name || !price) {
        return res.status(400).json({ error: 'Name and price are required' });
      }
      const product = await Product.update(req.params.id, name, price); // price not email
      if (!product) return res.status(404).json({ error: 'Product not found' });
      res.json(product);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};