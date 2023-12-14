const CategoryService = require('./../services/category.service');
const service = new CategoryService();
const checkRolesGql = require('./../utils/auth/checkRolesGql');
const checkJwtGql = require('./../utils/auth/checkJwtGql');

const addCategory = async(_, { dto }, context) => {
  const  user  = await checkJwtGql (context);
  checkRolesGql(user, "admin");
  return service.create(dto);
}

module.exports = {addCategory}
