exports.up = function (knex) {
  return knex.schema.createTable("tblWords", (tblWordsTable) => {
    tblWordsTable.increments("wordComparison_id").primary();
    tblWordsTable.string("primary_words").notNullable();
    tblWordsTable.string("secondary_words").notNullable();
    tblWordsTable.timestamp("compared_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("tblWords");
};
