console.log('Starting server')
require('dotenv').config()
const PORT = process.env.PORT || 3333
const express = require('express')
const { serveBuildFolder } = require('./serveBuildFolder')
const { apiRouter } = require('./apiRouter')
const mongoose = require('mongoose')
const { MongoClient } = require('mongodb')
const bodyParser = require('body-parser')

// Init express server
const app = express()
// Parse requests
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//mongoDB Atlas
const CONNECTION_URL = process.env.CONNECTION_URL
console.log('----------------------------------------')
console.log(CONNECTION_URL)
// Handle API requests

app.use('/api', apiRouter)

// Serve Build
serveBuildFolder(app, '/../app/build')

// const client = new MongoClient(CONNECTION_URL)

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases()

  console.log('Databases:')
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`))
}
// Start server
async function main() {
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  const client = new MongoClient(CONNECTION_URL, { useUnifiedTopology: true })

  try {
    // Connect to the MongoDB cluster
    await client.connect()
    await listDatabases(client)
    app.listen(PORT, async (e) => {
      try {
        if (e) throw e
        console.log(`Server listening on http://localhost:${PORT}`)
      } catch (e) {
        console.error(e)
      }
    })
  } catch (e) {
    console.error(e)
  } finally {
    await client.close()
  }
}
main().catch(console.error)
