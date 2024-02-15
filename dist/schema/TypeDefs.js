import gql from 'graphql-tag';
export const typeDefs = gql `
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
    dates: [YardSaleDate!]!
    hours: String!
    imageId: String!
    yardSaleTags: [Tag!]!
    savedYardSales: [SavedYardSales!]!
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

  type YardSaleDate {
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

  type Query {
    users: [User!]!
    user(id: String!): User!
    accounts: [Account!]!
    account(id: String!): Account!
    sessions: [Session!]!
    session(id: String!): Session!
    verificationTokens: [VerificationToken!]!
    verificationToken(id: String!): VerificationToken!
    yardSales: [YardSale!]!
    yardSale(id: String!): YardSale!
    addresses: [Address!]!
    address(id: String!): Address!
    images: [Image!]!
    image(id: String!): Image!
    tags: [Tag!]!
    tag(id: String!): Tag!
    yardSaleTags: [yardSaleTags!]!
    yardSaleTag(id: String!): yardSaleTags!
    savedYardSales: [SavedYardSales!]!
    savedYardSale(id: String!): SavedYardSales!
    yardSaleDates: [YardSaleDate!]!
    yardSaleDate(id: String!): YardSaleDate!
  }

  type Mutation {
  createUser(
    name: String!
    email: String!
    emailVerified: Boolean!
    image: String!
    role: Role!
  ): User!
  
  updateUser(
    id: String!
    name: String
    email: String
    emailVerified: Boolean
    image: String
    role: Role
  ): User!


  deleteUser(id: String!): User!

  createYardSale( 
    userId: String!
    addressId: String!
    title: String!
    description: String!
    hours: String!
    imageId: String!
  ): YardSale!

  updateYardSale(
    id: String!
    userId: String
    addressId: String
    title: String
    description: String
    hours: String
    imageId: String
  ): YardSale!

  deleteYardSale(id: String!): YardSale!

  createAddress(
    userId: String!
    street: String!
    city: String!
    state: String!
    zip: String!
    country: String!
  ): Address!

  updateAddress(
    id: String!
    userId: String
    street: String
    city: String
    state: String
    zip: String
    country: String
  ): Address!

  deleteAddress(id: String!): Address!

  createImage(
    url: String!
  ): Image!

  updateImage(
    id: String!
    url: String
  ): Image! 

  deleteImage(id: String!): Image!

  createTag(
    name: String!
  ): Tag!

  updateTag(
    id: String!
    name: String
  ): Tag!

  deleteTag(id: String!): Tag!

  createYardSaleTag(
    yardSaleId: String!
    tagId: String!
  ): yardSaleTags!

  deleteYardSaleTag(id: String!): yardSaleTags!

  createSavedYardSale(
    yardSaleId: String!
    userId: String!
  ): SavedYardSales!

  
  }
`;
