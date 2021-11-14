const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  env: {
    MONGODB_URI: 'mongodb://localhost:27017/travelBlog',
  },
})
