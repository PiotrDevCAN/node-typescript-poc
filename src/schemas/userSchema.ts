import { buildSchema } from 'graphql';

export const userSchema = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    getUser(id: ID!): User
  }
`);
