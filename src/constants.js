'use strict';

var env = require('./utils/env')

var PORT = process.env.PORT || 3000
var BASE_URL = env.SERVER ? `http://localhost:${PORT}` : ''

module.exports = {
  API_URL: `${BASE_URL}/api`
, FORUM_API_URL: `${BASE_URL}/forum-api`
, TITLE: 'Isomorphic Lab'
}