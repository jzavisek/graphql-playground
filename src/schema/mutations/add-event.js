'use strict'

const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLObjectType,
} = require('graphql')

const EventType = require('./../types/event')

const EventInputType = new GraphQLInputObjectType({
  name: 'EventInputType',
  description: 'Data needed for creating new event.',
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
  }
})

module.exports = {
  type: EventType,
  args: {
    input: { type: new GraphQLNonNull(EventInputType) }
  },
  resolve(obj, args, ctx) {

    // TODO: Save event to the database
    const event = args.input
    
    // Send newly created entity back to the client
    return event
  }
}
