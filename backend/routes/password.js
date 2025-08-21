const express = require('express');
const router = express.Router();

router.post('/reset', async (req, res) => {
  res.json({ message: 'Password reset request received' });
});

module.exports = router;


