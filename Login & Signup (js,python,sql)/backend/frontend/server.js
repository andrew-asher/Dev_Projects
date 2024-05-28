const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Route for user signup
app.post('/signup', (req, res) => {
    // Handle signup logic here
});

// Route for user login
app.post('/login', (req, res) => {
    // Handle login logic here
});

// Serve index.html for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(3000, () => {
    console.log('Frontend server running on http://localhost:3000');
});
