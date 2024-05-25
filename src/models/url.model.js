import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true
  },
  shortenedUrl: {
    type: String,
    required: true
  },
  clicks: {
    type: Number,
    default: 0
  }
});

export const Url = mongoose.model('url', urlSchema);
