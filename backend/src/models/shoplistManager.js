const AbstractManager = require("./AbstractManager");

class ShoplistManager extends AbstractManager {
  constructor() {
    super({ table: "shoplist" });
  }

  findAllShoplistsWithDetails() {
    return this.connection
      .query(`SELECT s.id, s.order_number, s.date, s.status, c.lastname, c.firstname
    FROM ${this.table} as s
    JOIN ticket as t ON t.id=s.ticket_id
    JOIN client as c ON c.id=t.client_id;`);
  }

  insert(item) {
    return this.connection.query(
      `insert into ${this.table} (order_number, total_price, status, date, ticket_id) values (?, ?, ?, ?, ?)`,
      [
        item.order_number,
        item.total_price,
        item.status,
        item.date,
        item.ticket_id,
      ]
    );
  }

  insertProduct(newShoplistId, item) {
    return this.connection.query(
      `insert into shoplist_elem (shoplist_id, product_id, quantity) values (?, ?, ?)`,
      [newShoplistId, item.id, item.amount]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${this.table} set order_number = ?, total_price = ?, status = ?, date = ?, ticket_id = ? where id = ?`,
      [item.order_number, item.status, item.date, item.ticket_id, item.id]
    );
  }
}

module.exports = ShoplistManager;
