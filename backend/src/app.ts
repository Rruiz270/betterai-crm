import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'BetterAI CRM API is running',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

app.get('/api/v1', (req, res) => {
  res.json({
    message: 'BetterAI CRM API v1'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 BetterAI CRM API running on port ${PORT}`);
});
