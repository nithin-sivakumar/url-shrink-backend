import express from 'express';
import { shrinkUrl } from '../controllers/shrink.js';
import { redirectToUrl } from '../controllers/redirect.js';
import { getViews } from '../controllers/analytics.js';

const router = express.Router();

// Receive a long url from req, send a short URL as response
router.route('/new').post(shrinkUrl);

// If the user visits the short url, redirect him to the long url
router.route('/u/:id').get(redirectToUrl);

// Get the number of clicks of one particular url
router.route('/info/:id').get(getViews);

export default router;
