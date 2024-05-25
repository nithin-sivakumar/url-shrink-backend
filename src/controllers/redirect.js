import { Url } from '../models/url.model.js';

export const redirectToUrl = async (req, res) => {
  try {
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      return res.status(204).end();
    }

    // 1. Get the short id from req.params -> r24s7d
    const { id } = req.params;

    // 2. Fetch the document that contains short ID as r24s7d
    const currentUrl = await Url.findOne({ shortenedUrl: id });

    currentUrl.clicks += 1;
    await currentUrl.save();

    res.header('Access-Control-Allow-Origin', '*');

    // 3. Redirect the user to currentUrl.originalUrl
    res.redirect(currentUrl.originalUrl);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: 'Error redirecting to URL', reason: error });
  }
};
