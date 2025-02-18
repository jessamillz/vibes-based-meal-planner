require('dotenv').config(); // Load environment variables

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000; // Default to port 5000

// Middleware
app.use(cors()); // Enable CORS (Cross-Origin Resource Sharing)
app.use(express.json()); // Allow JSON request bodies

// Test Route
app.get('/', (req, res) => {
    res.send('Vibes Meal Planner API is running!');
});

// Start Server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
    console.log(`🗄️ Database URL: ${process.env.DATABASE_URL ? "Loaded" : "Not found in .env"}`);
});