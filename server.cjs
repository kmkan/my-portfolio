const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// --- Robust CORS Configuration ---
// This allows requests from your custom domain (with and without www)
// and your local development environment.
const allowedOrigins = [
  process.env.FRONTEND_URL, 
  'https://www.kamalkandpal.com', 
  'https://kamalkandpal.com',
  'http://localhost:5173'
].filter(Boolean); // Filters out any undefined/null values

const corsOptions = {
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log('MongoDB connection error:', err));

// Mongoose Schema and Model
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);

// Email validation function
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// API Route
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    // Server-side validation
    if (!name || !email || !message) {
        return res.status(400).json({ msg: 'Please enter all fields.' });
    }
    if (!validateEmail(email)) {
        return res.status(400).json({ msg: 'Please enter a valid email address.' });
    }

    try {
        const newMessage = new Message({ name, email, message });
        await newMessage.save();
        res.status(200).json({ msg: 'Message saved successfully!' });
    } catch (error) {
        console.error("Error saving message:", error);
        res.status(500).json({ msg: 'Server error. Could not save message.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});