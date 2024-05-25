import express from 'express';
import router from './routes/url.route.js';
import cors from 'cors';
// import { corsOptions } from './config/cors.config.js';
import path from 'path';

const app = express();

app.use(
  cors({
    origin: 'https://url-shrink-frontend.vercel.app',
    methods: 'GET, POST, OPTIONS',
    allowedHeaders: 'Content-Type'
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static(path.resolve('dist')));

app.use('/', router);

export default app;
