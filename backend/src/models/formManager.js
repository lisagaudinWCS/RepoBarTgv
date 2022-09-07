const AbstractManager = require("./AbstractManager");

class FormManager extends AbstractManager {
  constructor() {
    super({ table: "form" });
  }

  insert(item) {
    return this.connection.query(
      `insert into ${this.table} (form_number, date, description, email, name, category_form_id) values (?, ?, ?, ?, ?, ?)`,
      [
        item.form_number,
        item.date,
        item.description,
        item.email,
        item.name,
        item.category_form_id,
      ]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = FormManager;
