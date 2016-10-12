'use strict'

const _ = require('lodash')
const {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} = require('graphql')

const EventType = require('./types/event')
const AddEventMutation = require('./mutations/add-event')

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'Root query type provides list of all root fields that client is allowed to use when quering the server.',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => 'Hello world'
    },
    event: {
      type: new GraphQLList(EventType),
      args: {
        limit: {
          type: GraphQLInt,
        }
      },
      resolve(obj, args, ctx) {

        // Load events
        let events = _.values(ctx.data.events)
        if (args.limit) {
          events = _.take(events, args.limit) 
        }

        // Send to client
        return events
      }
    }
  }
})

const RootMutationType = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    AddEvent: AddEventMutation,
  }
})

const RootSchema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType, 
})

module.exports = RootSchema
