const { gql } = require('apollo-server-express');

const typeDefs = gql`
# Date isnt a recognized type in gql so we need to add it as a scalar type where its properties are defined in dateResolver
  scalar Date

  type Impact {
    _id: ID
    date: Date
    travelContribution: Int
    energyContribution: Int
    foodWasteContribution: Int
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    impactScore: Int
    dailyImpact: [Impact]
  }

  type Action {
    _id: ID
    name: String
    units: String
    carbonPerUnit: Int
    category: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    # Queries
    # actionsByCategory
    # Get me (logged in user)
    user(username: String!): User
    
  }

  type Mutation {
    # updateImpact  If impact exists with todays dat update otherwise create
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
  `

module.exports = typeDefs;