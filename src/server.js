import 'dotenv/config';
import http from 'http';
import app from './app.js';
import { connectDB } from './db/db.connect.js';

const PORT = process.env.PORT || 5001;

const server = http.createServer(app);

connectDB().then(
  () => {
    server.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`);
    });
  },
  () => {
    console.log(`Failed to connect to MongoDB`);
  }
);
