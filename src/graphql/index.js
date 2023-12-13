// /graphql/index.js

// Dependencia que crea un servidor
const { ApolloServer } = require('@apollo/server')
// Playground incluido en @apollo/server
const { ApolloServerPluginLandingPageLocalDefault } = require('@apollo/server/plugin/landingPage/default')
// Middleware de Express también en @apollo/server
const { expressMiddleware } = require('@apollo/server/express4')

//los parametros de la query son opcionales. Si queremos que sean obligatorios sus types deben tener un signo !:
const typeDefs = `
  type Query {
    hello: String
    getPerson(name: String!, age: Int!): String!
    getInt(age: Int!): Int
    getFloat(price: Float!): Float
    getString: String
    getBoolean: Boolean
    getID:ID
  }
`

// Get = Query
// POST, PUT , DELETE = Mutations
// POST = 201
// POST = CREATE =201
// GET = GET DATA
// PUT = Update
// DELETE = remove

const resolvers = {
  Query: {
    hello: () => 'Hola mundillo',
    // getPerson: () => [1, 2, 3]
    // getPerson: () => 12
    getPerson: (_, args) => `hello, my name is ${args.name}, i am ${args.age} years old`,
    getInt: (_, args) => args.age,
    getFloat: (_, args) => args.price,
    getString: () => 'palabrea',
    getBoolean: () => true,
    getID: () => '123456'

  }
}

const useGraphQL = async (app) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    plugins: [
      ApolloServerPluginLandingPageLocalDefault
    ]
  })

  await server.start()

// Uso del middleware en Express
  app.use(expressMiddleware(server,{
    context: async ({req}) => ({
      token: req.headers.token
    })
  }))
}

module.exports = useGraphQL
