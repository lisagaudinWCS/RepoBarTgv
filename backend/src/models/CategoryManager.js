const AbstractManager = require("./AbstractManager");

class CategoryManager extends AbstractManager {
  constructor() {
    super({ table: "category_product" });
  }

  findAllByCategory(id) {
    return this.connection.query(
      `
    select
        product.id, 
        product.description,
        product.name,
        product.image,
        product.price,
        particularity_food.image as particularity, 
        c.name as category from ${this.table} as c
    join product on product.category_id = c.id
    join particularity_food on product.particularity_food_id = particularity_food.id
    where c.id = ?`,
      [id]
    );
  }
}

module.exports = CategoryManager;
