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

 const addProduct = async (_, { dto }) =>{
  const newProduct = await service.create(dto);
  return newProduct;
 }


 module.exports = {getProducts, getProduct, addProduct};