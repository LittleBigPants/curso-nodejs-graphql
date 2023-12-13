 const getProduct = (_, args) => {
  return {
    id: args.id,
    name: 'product 1',
    price: 100.12,
    description: 'bla bla bla bla',
    image: 'http://image.asas',
    createdAt: new Date().toISOString(),
  };
 }
 const getProducts = (_, args) => {
  return [];
 }


 module.exports = {getProducts, getProduct};
