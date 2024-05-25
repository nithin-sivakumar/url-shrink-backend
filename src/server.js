import 'dotenv/config';
import http from 'http';
import app from './app.js';
import { connectDB } from './db/db.connect.js';

const PORT = process.env.PORT || 5001;

let server;

async function startServer() {
  if (server) {
    return server;
  }

  server = http.createServer(app);

  try {
    await connectDB();
    server.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`);
    });
  } catch (err) {
    console.log('Failed to connect to MongoDB', err);
    throw err;
  }

  return server;
}

export default startServer;
