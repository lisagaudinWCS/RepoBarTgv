const AbstractManager = require("./AbstractManager");

class ShoplistElemManager extends AbstractManager {
  constructor() {
    super({ table: "shoplist_elem" });
  }

  insert(newShoplistId, item) {
    return this.connection.query(
      `insert into ${this.table} (shoplist_id, product_id, quantity) values (?, ?, ?)`,
      [newShoplistId, item.product_id, item.quantity]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${this.table} set shoplist_id = ?, product_id = ?, quantity = ? where id = ?`,
      [item.shoplist_id, item.product_id, item.quantity, item.id]
    );
  }

  getAllShoplist() {
    return this.connection.query(
      `SELECT * FROM ${this.table} INNER JOIN shoplist ON shoplist.id=shoplist_elem.shoplist_id INNER JOIN product ON product.id=shoplist_elem.product_id`
    );
  }

  getShoplistByShoplistId(id) {
    return this.connection.query(
      `SELECT * FROM ${this.table} INNER JOIN shoplist ON shoplist.id=shoplist_elem.shoplist_id INNER JOIN product ON product.id=shoplist_elem.product_id WHERE shoplist_id= ?`,
      [id]
    );
  }
}

module.exports = ShoplistElemManager;
