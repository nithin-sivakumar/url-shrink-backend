import { Url } from '../models/url.model.js';

export const getViews = async (req, res) => {
  try {
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      return res.status(204).end();
    }

    // 1. Get the ShortID -> req.params
    const { id } = req.params;

    // 2. Get the document that has the same ShortID
    const currentUrl = await Url.findOne({ shortenedUrl: id });

    if (!currentUrl) {
      return res.status(404).json({ message: 'Invalid Short ID provided!' });
    }

    res.header('Access-Control-Allow-Origin', '*');

    // 3. Return that document.clicks as response
    res.status(200).json({
      message: 'Fetched views successfully.',
      views: currentUrl.clicks
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: 'Error retrieving analytics', reason: error });
  }
};
