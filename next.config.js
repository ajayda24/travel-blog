const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  env: {
    mongodburl: 'mongodb://localhost:27017/travelBlog',
  },
})
