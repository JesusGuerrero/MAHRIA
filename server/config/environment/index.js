'use strict';

var Path = require('path'),
  rootPath = Path.normalize(__dirname + '/../../');

module.exports = function( env ) {
  
  return {
    datastoreURI: env.MONGOLAB_URI,
    rootPath: rootPath,
    type: env.NODE_ENV,
    port: env.PORT,
    url: env.NODE_URL
  };
};