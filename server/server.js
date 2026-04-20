const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Use the corrected connection string here
const mongoURI = "mongodb+srv://keres_db:%40bAr1999@cluster0.f3uwpla.mongodb.net/KeresStore?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURI)
  .then(() => console.log("✅ MongoDB Connected for Afreenneha's Portfolio"))
  .catch(err => console.log("❌ Connection Error:", err));

app.listen(5000, () => console.log("🚀 Server running on port 5000"));