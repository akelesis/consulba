exports.up = function(knex) {
  return knex.schema.createTable("appointment", table => {
    table.increments("appoint_id").primary();
    table
      .integer("doctor_id")
      .unsigned()
      .notNull();
    table.string("date").notNull();
    table.string("time").notNull();
    table.string("patient_name").notNull();
    table.string("patient_email").notNull();
    table
      .boolean("done")
      .notNull()
      .defaultTo(false);
    table
      .foreign("doctor_id")
      .references("doctor_id")
      .inTable("doctor");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("appointment");
};
