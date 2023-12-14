const CategoryService = require('./../services/category.service');
const service = new CategoryService();

const addCategory = (_, { dto, context }) => {
  context.au
  return service.create(dto)
}

module.exports = {addCategory}
