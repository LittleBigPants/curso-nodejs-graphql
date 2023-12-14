const CategoryService = require('./../services/category.service');
const service = new CategoryService();
const boom = require('@hapi/boom');

const addCategory = async(_, { dto }, context) => {
  const { user } = await context.authenticate('jwt', {session: false});
  if (!user) {
    throw boom.unauthorized("no esta autorizadfo")
  }
  return service.create(dto)
}

module.exports = {addCategory}
