const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
<<<<<<< HEAD:bloom/server/schemas/typeDefs.js
    _id: ID!
    username: String!
    email: String!
=======
    _id: ID
    username: String
    email: String
    password: String
>>>>>>> main:server/schemas/typeDefs.js
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