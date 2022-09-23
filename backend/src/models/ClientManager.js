const AbstractManager = require("./AbstractManager");

class ClientManager extends AbstractManager {
  constructor() {
    super({ table: "client" });
  }

  findByEmail(email) {
    return this.connection.query(
      `select * from  ${this.table} where email = ?`,
      [email]
    );
  }

  insert(item) {
    return this.connection.query(
      `insert into ${this.table} (client_number, lastname, firstname, email, password, avatar, birth_date, isAdmin) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        item.client_number,
        item.lastname,
        item.firstname,
        item.email,
        item.hashedPassword,
        item.avatar,
        item.birth_date,
        item.isAdmin,
      ]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${this.table} set client_number = ?, lastname = ?, firstname = ?, email = ?, password = ?, avatar = ?, birth_date =?, isAdmin = ? where id = ?`,
      [
        item.client_number,
        item.lastname,
        item.firstname,
        item.email,
        item.hashedPassword,
        item.avatar,
        item.birth_date,
        item.isAdmin,
        item.id,
      ]
    );
  }
}

module.exports = ClientManager;
