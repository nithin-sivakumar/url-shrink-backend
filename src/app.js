import express from 'express';
import router from './routes/url.route.js';
import cors from 'cors';
import { corsOptions } from './config/cors.config.js';

const app = express();

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

export default app;
