import * as Knex from 'knex';

const tableName = 'awards';
export function up(knex: Knex): Knex.SchemaBuilder {
  return knex.schema.createTable(tableName, t => {
    t.increments('id').primary().notNullable();
    t.string('name', 100).notNullable();
    t.string('entity', 100).notNullable();
    t.date('year').notNullable();
    t.timestamp('createdAt').notNullable();
    t.timestamp('updatedAt').nullable();
    t.integer('idPersons').notNullable();
    t.foreign('idPersons').references('id').inTable('persons');
  });
}

export function down(knex: Knex): Knex.SchemaBuilder {
  return knex.schema.dropTable(tableName);
}
