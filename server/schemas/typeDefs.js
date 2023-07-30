const { gql } = require('apollo-server-express');

const typeDefs = gql`
# Date isnt a recognized type in gql so we need to add it as a scalar type where its properties are defined in dateResolver
  scalar Date

  type Impact {
    _id: ID
    date: Date
    travelContribution: Float
    energyContribution: Float
    foodContribution: Float
  }

  type Goal {
    dateCreated: Date!
    goalText: String!
  }

  input ActionInput {
    date: Date!
    category: String!
    carbonContribution: Float!
  }

  input OffsetInput{
    donationAmount: Float!
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    impactScore: Float
    dailyImpact: [Impact]
    weeklyGoal: Goal
    electricityBill: Float
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
    updateImpact(input: ActionInput): User
    offsetTotalImpact(input: OffsetInput): User
    updateElectricityBill(electricityBill: Float!): User
    updateGoal(goalText: String!): User
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
  `

module.exports = typeDefs;