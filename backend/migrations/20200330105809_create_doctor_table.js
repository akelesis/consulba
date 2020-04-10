exports.up = function(knex) {
  return knex.schema.createTable("doctor", table => {
    table.increments("doctor_id").primary();
    table.string("doctor_name").notNull();
    table.string("doctor_email").notNull();
    table.string("doctor_crm").notNull();
    table.string("doctor_gender").notNull();
    table.string("doctor_password").notNull();
    table.string("doctor_city").notNull();
    table.string("doctor_uf").notNull();
    table
      .boolean("doctor_active")
      .notNull()
      .defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("doctor");
};
