import express from 'express';
import { PORT } from './config.js';
import certificateRoutes from './routes/certificate.js';

// Create Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Main routes
app.use('/certificate', certificateRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`✅ LabChain backend running on http://localhost:${PORT}`);
});
