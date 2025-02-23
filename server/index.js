require('dotenv').config(); // Load environment variables

const express = require('express');
const cors = require('cors');
const { Pool } = require('pg'); // PostgreSQL client

const app = express();
const PORT = process.env.PORT || 5000; // Default to port 5000

// Middleware
app.use(cors()); // Enable CORS (Cross-Origin Resource Sharing)
app.use(express.json()); // Allow JSON request bodies

// PostgreSQL Connection
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false // Required for Supabase SSL
    }
});

// Test DB Connection
pool.connect((err, client, release) => {
    if(err) {
        return console.error('Error connecting to DB: ', err.stack);
    }
    console.log('Connected to Supabase PostgreSQL!');
    release();
})

// Test API Route
app.get('/', (req, res) => {
    res.send('Vibes Based Meal Planner API is running!');
});

// Start Server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
    console.log(`🗄️ Database URL: ${process.env.DATABASE_URL ? "Loaded" : "Not found in .env"}`);
});