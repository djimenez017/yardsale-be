const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: String!
    name: String!
    email: String!
    emailVerified: Boolean!
    image: String!
    accounts: [Account!]!
    sessions: [Session!]!
    yardSales: [YardSale!]!
    address: [Address!]!
    savedYardSales: [YardSale!]!
  }

  type Account {
    id: String!
    userId: String!
    type: String!
    provider: String!
    providerAccountId: String!
    refresh_token: String
    access_token: String
    expires_at: String
    expires_at: String
    token_type: String
    scope: String
    id_token: String
    session_state: String
  }

  type Session {
    id: String!
    userId: String!
    expires: String!
    sessionToken: String!
  }

  type VerificationToken {
    identifier: String!
    token: String!
    expires: String!
  }

  type YardSale {
    id: String!
    userId: String!
    addressId: String!
    title: String!
    description: String!
    dates: [Date!]!
    hours: String!
    imageId: String!
    yardSaleTags: [Tag!]!
    savedYardSales: [savedYardSales!]!
  }

  type Address {
    id: String!
    userId: String!
    street: String!
    city: String!
    state: String!
    zip: String!
    country: String!
    createdAt: String!
    yardSaleId: [YardSale!]!
  }

  type Image {
    id: String!
    url: String!
    yardSaleId: [YardSale!]!
  }

  type Tag {
    id: String!
    name: String!
    yardSaleId: [YardSale!]!
  }

  type yardSaleTags {
    yardSaleId: String!
    tagId: String!
    yardSale: YardSale!
    tag: Tag!
  }

  type SavedYardSales {
    yardSaleId: String!
    yardSale: YardSale!
    userId: String!
    user: User!
  }

  type Date {
    id: String!
    yardSaleId: String!
    date: String!
    yardSale: YardSale!
  }

  enum Role {
    ADMIN
    VIEWER
    SELLER
  }
`;
