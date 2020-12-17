const { ApolloServer, gql } = require('apollo-server-lambda')

const faunadb = require("faunadb");
const q = faunadb.query;
const shortid = require("shortid");

require('dotenv').config(); 


const typeDefs = gql`
  type Query {
    hello: String
    getLolly(lollyPath: String!): Lolly
  }
  type Lolly {
    recipientName: String!
    message: String!
    senderName: String!
    flavourTop: String!
    flavourMiddle: String!
    flavourBottom: String!
    lollyPath: String!
  }
  type Mutation {
    createLolly (recipientName: String!, message: String!,senderName: String!, flavourTop: String!,flavourMiddle: String!,flavourBottom: String!) : Lolly
  }
`


const resolvers = {
  Query: {
    hello: () => {
      return 'Hello, Lolly!'
    },

    getLolly: async (_,{ lollyPath }) => {
      console.log("Hey! this is your lolly-path ", lollyPath);
      const client = new faunadb.Client({secret: process.env.FAUNADB_ADMIN_SECRET });
      var result = await client.query(
        q.Get(q.Match(q.Index("lolly_by_path"), lollyPath))        
      )

      console.log("get lolly result ==> ", result.data);
      return result.data;
    }
  },
  Mutation : {
    createLolly: async (_, args) => {

        console.log("args = ",args);
      
      const client = new faunadb.Client({secret: process.env.FAUNADB_ADMIN_SECRET });
      const id = shortid.generate();
      args.lollyPath = id

      const result = await client.query(
        q.Create(q.Collection("lollies"), {
          data: args
        })
      );
        
      console.log('result', result);
      console.log('result', result.data);
      return result.data
    },
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

exports.handler = server.createHandler()