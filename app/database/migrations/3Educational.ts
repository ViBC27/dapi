import * as Knex from 'knex';

const tableName = 'educationals';
export function up(knex: Knex): Knex.SchemaBuilder {
  return knex.schema.createTable(tableName, t => {
    t.increments('id').primary().notNullable();
    t.string('advisor', 100).notNullable();
    t.string('discipline', 100).notNullable();
    t.integer('idExperiences').notNullable();
    t.foreign('idExperiences').references('id').inTable('experiences');
  });
}

export function down(knex: Knex): Knex.SchemaBuilder {
  return knex.schema.dropTable(tableName);
}
