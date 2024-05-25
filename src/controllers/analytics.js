import { Url } from '../models/url.model.js';

export const getViews = async (req, res) => {
  try {
    // 1. Get the ShortID -> req.params
    const { id } = req.params;

    // 2. Get the document that has the same ShortID
    const currentUrl = await Url.findOne({ shortenedUrl: id });

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
