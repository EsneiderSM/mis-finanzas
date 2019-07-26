const all = {

    // Server port
    port: process.env.PORT || 8080,

    // Server IP
    ip: process.env.IP || '127.0.0.1',

    // MongoDB connection options
    mongo: {
      uri: process.env.MONGODB_URI || 'mongodb+srv://dbPocketTest:6dA2aV8X@pocket-test-rsk3j.azure.mongodb.net/pocket?retryWrites=true&w=majority',
      db: 'pocket',
    },

  };
  
  module.exports = all;