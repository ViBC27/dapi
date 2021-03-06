import * as Knex from 'knex';

const tableName = 'persons';
export function up(knex: Knex): Knex.SchemaBuilder {
  return knex.schema.createTable(tableName, t => {
    t.increments('id').primary().notNullable();
    t.string('name', 100).notNullable();
    t.string('identity', 32).unique().notNullable();
    t.string('email', 100).unique().notNullable();
    t.string('pathname', 32).unique().notNullable();
    t.string('username', 16).unique().notNullable();
    t.string('password', 16).notNullable();
    t.timestamp('createdAt').notNullable();
    t.timestamp('updatedAt').nullable();
  });
}

export function down(knex: Knex): Knex.SchemaBuilder {
  return knex.schema.dropTable(tableName);
}
