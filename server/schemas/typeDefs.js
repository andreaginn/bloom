const { gql } = require('apollo-server-express');

const typeDefs = gql`
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
    user(username: String!): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
  `

module.exports = typeDefs;