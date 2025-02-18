const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/leaderboard/bedwars', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'bedwars.html'));
});

app.get('/leaderboard/skywars', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'skywars.html'));
});

app.get('/forum', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'forum.html'));
});

app.get('/submit', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'submit.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
