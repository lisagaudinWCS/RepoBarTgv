/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class FavoriteManager extends AbstractManager {
  constructor() {
    super({ table: "favorite" });
  }

  insert(item) {
    return this.connection.query(
      `insert into ${this.table} (product_id, client_id) values (?, ?)`,
      [item.product_id, item.client_id]
    );
  }

  deleteFav(product_id, client_id) {
    return this.connection.query(
      `delete from ${this.table} where product_id = ? and client_id = ?`,
      [product_id, client_id]
    );
  }
}

module.exports = FavoriteManager;
