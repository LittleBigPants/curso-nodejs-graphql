// /graphql/index.js

// Dependencia que crea un servidor
const { ApolloServer } = require('@apollo/server');
// Playground incluido en @apollo/server
const {
  ApolloServerPluginLandingPageLocalDefault,
} = require('@apollo/server/plugin/landingPage/default');
// Middleware de Express también en @apollo/server
const { expressMiddleware } = require('@apollo/server/express4');

const { loadFiles} = require('@graphql-tools/load-files');



//los parametros de la query son opcionales. Si queremos que sean obligatorios sus types deben tener un signo !:

// el signo ! me obliga a cumplir con lo el tipo de query que pido
// const typeDefs = `
//   type Query {
//     hello: String!
//     getPerson(name: String!, age: Int!): String!
//     getInt(age: Int!): Int
//     getFloat(price: Float!): Float
//     getString: String
//     getBoolean: Boolean
//     getID:ID
//     getNumbers(numbers: [Int!]!): [Int]
//     getProduct: Product
//   }

//   type Product {
//     id: ID!
//     name: String!
//     price: Float!
//     description: String!
//     image: String!
//     createdAt: String!
//   }
// `;
// Scalar types
// Get = Query
// POST, PUT , DELETE = Mutations
// POST = 201
// POST = CREATE =201
// GET = GET DATA
// PUT = Update
// DELETE = remove

// List
// [String]
// [Int]

const resolvers = {
  Query: {
    hello: () => 'buenas muchachos',
    // getPerson: () => [1, 2, 3]
    // getPerson: () => 12
    getPerson: (_, args) =>
      `hello, my name is ${args.name}, i am ${args.age} years old`,
    getInt: (_, args) => args.age,
    getFloat: (_, args) => args.price,
    getString: () => 'palabrea',
    getBoolean: () => true,
    getID: () => '123456',
    getNumbers: (_, args) => args.numbers,
    getProduct: () => {
      return {
        id: '1212',
        name: 'product 1',
        price: 100.12,
        description: 'bla bla bla bla',
        image: 'http://image.asas',
        createdAt: new Date().toISOString(),
      };
    },
  },
};

const useGraphQL = async (app) => {
  const server = new ApolloServer({
    typeDefs: await loadFiles('./src/**/*.graphql'), //esto para que tome todas los archivos .graphql
    resolvers,
    playground: true,
    plugins: [ApolloServerPluginLandingPageLocalDefault],
  });

  await server.start();

  // Uso del middleware en Express
  app.use(
    expressMiddleware(server, {
      context: async ({ req }) => ({
        token: req.headers.token,
      }),
    })
  );
};

module.exports = useGraphQL;
