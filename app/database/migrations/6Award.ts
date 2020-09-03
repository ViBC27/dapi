import * as Knex from 'knex';

const tableName = 'awards';
export async function up(knex: Knex): Promise<Knex.SchemaBuilder> {
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

export async function down(knex: Knex): Promise<Knex.SchemaBuilder> {
  return knex.schema.dropTable(tableName);
}
