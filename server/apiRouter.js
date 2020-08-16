const express = require('express')
const fetch = require('node-fetch')
const mongoose = require('mongoose')
const { MongoClient } = require('mongodb')
const apiRouter = express()

const wordModel = require('./models/word.js')
require('dotenv').config()

//mongoDB Atlas
const CONNECTION_URL = process.env.CONNECTION_URL

apiRouter.get('/test', (req, res) => {
  res.send("1234")
})


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })


apiRouter.get('/Words', async (req, res) => {
  const Words = await wordModel.find({})
  try {
    res.send(Words)
  } catch (err) {
    res.status(500).send(err)
  }
})

apiRouter.post('/Words', async (req, res) => {
  const Words = new wordModel(req.body);

  try {
    await Words.save();
    res.send(Words);
  } catch (err) {
    res.status(500).send(err);
  }
});

apiRouter.delete('/Words/:languageEntry', async (req, res) => {
  try {
    const Words = await wordModel.findOneAndDelete(req.params.languageEntry)

    if (!Words) res.status(404).send("No item found")
    res.status(200).send()
  } catch (err) {
    res.status(500).send(err)
  }
})

apiRouter.patch('/Words/:languageEntry', async (req, res) => {
  try {
    await wordModel.findOneAndUpdate(req.params.languageEntry, req.body)
    await wordModel.save()
    res.send(Words)
  } catch (err) {
    res.status(500).send(err)
  }
})


module.exports = apiRouter

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//   console.log("we're connected!")
// });



// const Word =  mongoose.model("Word", wordSchema)
// module.exports = Word;

// async function listDatabases(client) {
//   databasesList = await client.db().admin().listDatabases()

//   console.log('Databases:')
//   databasesList.databases.forEach((db) => console.log(` - ${db.name}`))
//   return databasesList.databases
// }
// // Start server
// async function test() {
//   /**
//    * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//    * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//    */
//   const client = new MongoClient(CONNECTION_URL, { useUnifiedTopology: true })

//   try {
//     // Connect to the MongoDB cluster

//     await client.connect()
//     return await listDatabases(client)
//   } catch (e) {
//     console.error(e)
//   } finally {
//     await client.close()
//   }

// }
// test().catch(console.error)

// apiRouter.get('/word', async (req, res) => {
//   const answer = await getBigFile('apple')
//   res.send(answer)
// })

// const getBigFile = async (a) => {
//   //THIS MIGHT TAKE 10 SECONDS!!!!!!
//   const url = 'https://baconipsum.com/api/?type=meat-and-filler'
//   const data = await fetch(url)
//   return data.json()
// }

// TODO: Authentication for admins
// TODO: ABility to retrieve words based on query
// TODO: Add new word
// TODO: Edit Word
// TODO: Delete Word

// CRUD: CREATE, READ, UPDATE, DELETE
// exports.apiRouter = apiRouter

// MERN MongoDB, Express, React, Node
