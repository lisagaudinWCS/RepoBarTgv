const AbstractManager = require("./AbstractManager");

class FormManager extends AbstractManager {
  constructor() {
    super({ table: "form" });
  }

  insert(item) {
    return this.connection.query(
      `insert into ${this.table} (form_number, date, description, email, lastname, firstname, rating_id) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        item.form_number,
        item.date,
        item.description,
        item.email,
        item.lastname,
        item.firstname,
        item.rating_id,
      ]
    );
  }
}

module.exports = FormManager;
