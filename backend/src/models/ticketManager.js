const AbstractManager = require("./AbstractManager");

class ticketManager extends AbstractManager {
  constructor() {
    super({ table: "ticket" });
  }

  insert(ticket) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [ticket.title]
    );
  }

  update(ticket) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [ticket.title, ticket.id]
    );
  }
}

module.exports = ticketManager;
