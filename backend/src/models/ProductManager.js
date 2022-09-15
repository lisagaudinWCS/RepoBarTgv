const AbstractManager = require("./AbstractManager");

class ProductManager extends AbstractManager {
  constructor() {
    super({ table: "product" });
  }

  insert(producttoto) {
    return this.connection.query(
      `insert into ${this.table} (reference_product, date, name, image, description, price, category_id, particularity_food_id) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        producttoto.reference_product,
        producttoto.date,
        producttoto.name,
        producttoto.image,
        producttoto.description,
        producttoto.price,
        producttoto.category_id,
        producttoto.particularity_food_id,
        producttoto.id,
      ]
    );
  }

  update(producttata) {
    return this.connection.query(
      `update ${this.table} set reference_product = ?,  date = ?, name = ?, image = ?, description = ?, price = ?, category_id = ?, particularity_food_id = ? where id = ?`,
      [
        producttata.reference_product,
        producttata.date,
        producttata.name,
        producttata.image,
        producttata.description,
        producttata.price,
        producttata.category_id,
        producttata.particularity_food_id,
        producttata.id,
      ]
    );
  }

  getProductsDetails() {
    return this.connection.query(
      `
    select product.id, 
        product.description, 
        product.name, 
        product.image, 
        product.price, 
        particularity_food.image as particularity, 
        category_product.name  as category from  ${this.table}
    join particularity_food on product.particularity_food_id = particularity_food.id
    join category_product on product.category_id = category_product.id
      `
    );
  }
}

module.exports = ProductManager;
