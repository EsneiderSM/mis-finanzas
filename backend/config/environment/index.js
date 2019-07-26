const all = {

    // MongoDB connection options
    mongo: {
      uri: process.env.MONGODB_URI || 'mongodb+srv://dbPocketTest:6dA2aV8X@pocket-test-rsk3j.azure.mongodb.net/test?retryWrites=true&w=majority',
      db: 'pocket',
    },

  };
  
  module.exports = all;