const models = require("../models");

const getAll = (req, res) => {
  models.product
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getAllProductlistWithDetails = (req, res) => {
  models.product
    .findAllProductlistsWithDetails()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getById = (req, res) => {
  models.product
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const item = req.body;

  // TODO validations (length, format...)

  models.product
    .insert(item)
    .then(([result]) => {
      res.location(`/product/${result.insertId}`).sendStatus(201);
      res.send(result.insertId);
      // eslint-disable-next-line no-unused-expressions
      item.product &&
        item.product.map((product) =>
          models.product.insertProduct(result.insertId, product)
        );
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const update = (req, res) => {
  const item = req.body;

  // TODO validations (length, format...)

  item.id = parseInt(req.params.id, 10);

  models.item
    .update(item)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAll,
  getById,
  update,
  add,
  getAllProductlistWithDetails,
};
