// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Sample data (in a real app, this would come from a database)
const garbageData = [
  { "name": "Pune", "total": 1200, "organic": 450, "plastic": 300, "metal": 100, "hazardous": 50, "coords": [18.5204, 73.8567] },
  { "name": "Mumbai", "total": 2000, "organic": 600, "plastic": 500, "metal": 150, "hazardous": 80, "coords": [19.0760, 72.8777] },
  { "name": "Nagpur", "total": 800, "organic": 300, "plastic": 200, "metal": 50, "hazardous": 20, "coords": [21.1458, 79.0882] },
  { "name": "Nashik", "total": 750, "organic": 250, "plastic": 200, "metal": 70, "hazardous": 30, "coords": [20.0110, 73.7900] },
  { "name": "Aurangabad", "total": 900, "organic": 350, "plastic": 250, "metal": 80, "hazardous": 40, "coords": [19.8762, 75.3433] }
];

// Endpoint to get garbage data
app.get('/api/garbage', (req, res) => {
  res.json(garbageData);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
