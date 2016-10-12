'use strict'

const express = require('express')
const graphqlHttp = require('express-graphql')
const { graphql } = require('graphql')
const data = require('./data')
const schema = require('./schema')

// Executes query agains schema directly
// const query = 'query { hello }'
// graphql(schema, query).then(result => {
//   console.log(result)
// })

const config = {
  port: 3000
}

const app = express()
app.use('/graphql', graphqlHttp({
  schema,
  graphiql: true,
  context: {
    data
  }
}))

console.log('Starting server ...')
app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`)
})
