import * as Knex from 'knex';

const tableName = 'languages';
export function up(knex: Knex): Knex.SchemaBuilder {
  return knex.schema.createTable(tableName, t => {
    t.increments('id').primary().notNullable();
    t.timestamp('createdAt').notNullable();
    t.timestamp('updatedAt').nullable();
    t.integer('idPersons').notNullable();
    t.foreign('idPersons').references('id').inTable('persons');
    t.enum('name', ['spanish', 'portuguese', 'english']).notNullable();
    t.enum('level', ['basic', 'intermediate', 'advanced']).notNullable();
  });
}

export function down(knex: Knex): Knex.SchemaBuilder {
  return knex.schema.dropTable(tableName);
}
