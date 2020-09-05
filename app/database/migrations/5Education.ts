import * as Knex from 'knex';

const tableName = 'educations';
export function up(knex: Knex): Knex.SchemaBuilder {
  return knex.schema.createTable(tableName, t => {
    t.increments('id').primary().notNullable();
    t.string('institution', 100).notNullable();
    t.string('course', 100).notNullable();
    t.date('startDate').notNullable();
    t.date('endDate').notNullable();
    t.integer('workLoad').nullable();
    t.timestamp('createdAt').notNullable();
    t.timestamp('updatedAt').nullable();
    t.integer('idPersons').notNullable();
    t.foreign('idPersons').references('id').inTable('persons');
    t.enum('status', ['progress', 'concluded', 'canceled']).notNullable();
    t.enum('level', ['primary', 'high', 'graduate', 'master', 'doctorate']).notNullable();
  });
}

export function down(knex: Knex): Knex.SchemaBuilder {
  return knex.schema.dropTable(tableName);
}
