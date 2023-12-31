const { DATE } = require('sequelize');
const {getProducts, getProduct, addProduct, updateProduct, deleteProduct, getProductsByCategory} = require('./product.resolvers');
const {login} = require('./auth.resolvers');
const {addCategory, getCategory} = require('./category.resolvers');
const { RegularExpression } = require("graphql-scalars");

const CategoryNameType = new RegularExpression("CategoryNameType", /^[a-zA-Z0-9]{3,8}$/)

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
    allProducts: getProducts,
    category: getCategory
  },
  Mutation: {
    addProduct,
    deleteProduct,
    updateProduct,
    login,
    addCategory,
  },
  CategoryNameType,
  Category: {
    products: getProductsByCategory
  }
};


module.exports = resolvers;
