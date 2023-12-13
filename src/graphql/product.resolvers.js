 const ProductsService = require('./../services/product.service')
 const service = new ProductsService();

const getProduct =  (_, args) => {
  return service.findOne(args.id)
 }
 const getProducts = (_, args) => {
  return service.find({});
 }

 const addProduct = (_, { dto }) =>{
  return service.create(dto);

 }

 const updateProduct =  (_, {id, dto}) => {
  return  service.update(id, dto);
 }

 const deleteProduct = async (_, {id}) => {
  await  service.delete(id);
  return id
 }
 // un resolve resuelve las promesas sin necesidad de un await async


 module.exports = {getProducts, getProduct, addProduct, updateProduct, deleteProduct};
