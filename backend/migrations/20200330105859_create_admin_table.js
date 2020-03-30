exports.up = function(knex) {
  return knex.schema.createTable("admin", table => {
    table.increments("admin_id").primary();
    table.string("admin_name").notNull();
    table.string("admin_email").notNull();
    table.string("admin_password").notNull();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("admin");
};
