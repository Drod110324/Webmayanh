const express = require('express');
const router = express.Router();

router.get('/stats', async (req, res) => {
  res.json({ users: 0, products: 0, orders: 0 });
});

module.exports = router;


