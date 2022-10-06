
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./pixel-streaming.cjs.production.min.js')
} else {
  module.exports = require('./pixel-streaming.cjs.development.js')
}
