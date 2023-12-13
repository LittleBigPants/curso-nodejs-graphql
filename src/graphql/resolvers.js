const {getProducts, getProduct, addProduct} = require('./product.resolvers');

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
    //products
    product: getProduct,
    allProducts: getProducts
  },
  Mutation: {
    addProduct
  }
};

module.exports = resolvers;