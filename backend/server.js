import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import TimeLog from './models/TimeLog.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// ✅ Add this route here
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// POST: Receive data from extension
app.post('/api/log', async (req, res) => {
  const { website, timeSpent } = req.body;
  await TimeLog.create({ website, timeSpent });
  res.json({ success: true });
});

// GET: Return all logs for dashboard
app.get('/api/logs', async (req, res) => {
  const logs = await TimeLog.find({});
  res.json(logs);
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
