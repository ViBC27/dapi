import * as Knex from 'knex';

const tableName = 'employments';
export function up(knex: Knex): Knex.SchemaBuilder {
  return knex.schema.createTable(tableName, t => {
    t.increments('id').primary().notNullable();
    t.decimal('price').nullable();
    t.enum('mode', ['employed', 'freelancer']).notNullable();
    t.integer('idExperiences').notNullable();
    t.foreign('idExperiences').references('id').inTable('experiences');
  });
}

export function down(knex: Knex): Knex.SchemaBuilder {
  return knex.schema.dropTable(tableName);
}
