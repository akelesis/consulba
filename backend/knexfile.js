// Update with your config settings.

module.exports = {
  client: "mysql",
  connection: {
    database: "consulba",
    user: "root",
    password: ""
  },
  migrations: {
    tableName: "knex_migrations"
  }
};
