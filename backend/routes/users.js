const express = require('express');
const router = express.Router();
const User = require("../model/user");
const authenticateJWT = require('../middleware/auth.js');
const { submitRating } = require('../controllers/rating.js');

// Get User by ID
router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: 'Server error' });
  }
});


router.post('/rating', authenticateJWT, submitRating);

module.exports = router;
