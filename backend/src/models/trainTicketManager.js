// "SELECT t.train_number, t.dep_ from, t.arr_to, t.departure_time, t.arrival_time, t.coach, t.seat, t.date, c.firstname, c.lastname FROM ${this.table} AS t INNER JOIN ticket AS ti INNER JOIN client AS c ON t.id=ti.train_id=ti.client_id;"
const AbstractManager = require("./AbstractManager");

class trainsTicketsClients extends AbstractManager {
  constructor() {
    super({ table: "train" });
  }

  getTrainsTicketsClients() {
    return this.connection.query(
      `SELECT t.train_number, t.dep_from, t.arr_to, t.departure_time, t.arrival_time, ti.coach, ti.seat, ti.date, c.firstname, c.lastname FROM ${this.table} as t INNER JOIN ticket as ti ON t.id=ti.train_id INNER JOIN client as c ON ti.client_id=c.id;`
    );
  }
}

module.exports = trainsTicketsClients;
