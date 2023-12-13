 const ProductsService = require('./../services/product.service')
 const service = new ProductsService();

const getProduct = async (_, args) => {
  const product = await service.findOne(args.id);
  return {
    product
  };
 }
 const getProducts = async (_, args) => {
  const products = await service.find({});
  return products;
 }


 module.exports = {getProducts, getProduct};
