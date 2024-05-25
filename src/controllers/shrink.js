import { Url } from '../models/url.model.js';
import short from 'short-unique-id';

export const shrinkUrl = async (req, res) => {
  try {
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      return res.status(204).end();
    }

    // 1. req.body -> original URL
    const { url } = req.body;

    // 2. Generate a short url
    const uid = new short({ length: 6 });
    const shortId = uid.rnd();

    // console.log(shortId);

    // 3. Store the original and short url in the DB
    await Url.create({
      originalUrl: url,
      shortenedUrl: shortId
    });

    res.header('Access-Control-Allow-Origin', '*');

    // 4. Send the short url as a response
    res.status(200).json({
      message: 'URL shrinking successful.',
      url: process.env.HOST + '/u/' + shortId
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error shrinking URL', reason: error });
  }
};
