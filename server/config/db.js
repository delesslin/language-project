const mongoose = require('mongoose')

const CONNECTION_URL = process.env.CONNECTION_URL
// getting this error: DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead
const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    mongoose.set('useCreateIndex', true)
    console.log('Connected to DB !!')
  } catch (e) {
    console.log(e)
    throw e
  }
}

module.exports = InitiateMongoServer
