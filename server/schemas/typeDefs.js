const { gql } = require('apollo-server-express');

const typeDefs = gql`
# Date isnt a recognized type in gql so we need to add it as a scalar type where its properties are defined in dateResolver
  scalar Date

  type Impact {
    _id: ID
    date: Date
    travelContribution: Float
    energyContribution: Float
    foodWasteContribution: Float
  }

  type actionInput {
    date: Date!
    category: String!
    carbonContribution: Float!
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    impactScore: Float
    dailyImpact: [Impact]
  }

  type Action {
    _id: ID
    name: String
    units: String
    carbonPerUnit: Float
    category: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    # Queries
    
    me: User
    actions(category:String):[Action] 
  }

  type Mutation {
    updateImpact(input: actionInput): User
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
  `

module.exports = typeDefs;