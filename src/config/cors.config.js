const whitelist = [
  'http://localhost:5000',
  'https://url-shrink-backend.vercel.app'
];

export const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};
