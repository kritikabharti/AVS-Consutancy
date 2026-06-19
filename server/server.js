const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = 'avs_solar_secret_key_123';

// Temporary account database (resets if server stops)
const users = [];

// 1. SIGN UP ROUTE
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = users.find(u => u.email === email);
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Scramble the password securely
    const hashedPassword = await bcrypt.hash(password, 10);

    users.push({ name, email, password: hashedPassword });
    res.status(201).json({ message: 'Registration successful!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// 2. LOG IN ROUTE
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email);
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Verify the typed password matches the scrambled password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Hand the user a secure login token valid for 1 day
    const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, message: 'Login successful!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(5000, () => console.log('Backend running on port 5000'));
