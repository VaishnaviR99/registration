const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the build folder
app.use(express.static(path.join(__dirname, 'build')));

// Catch-all route to serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
const cors = require('cors');

// Enable CORS for all routes
app.use(cors());