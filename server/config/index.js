const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  module.exports = require('./config.dev');
} else {
  module.exports = require('./config.prod');
}
