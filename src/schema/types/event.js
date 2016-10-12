'use strict'

const {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'EventType',
  description: 'Entity representing event.',
  fields: {
    id: { type: GraphQLID },
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
  }
})
