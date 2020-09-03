import * as Knex from 'knex';

const tableName = 'employments';
export async function up(knex: Knex): Promise<Knex.SchemaBuilder> {
  return knex.schema.createTable(tableName, t => {
    t.increments('id').primary().notNullable();
    t.decimal('price').nullable();
    t.enum('mode', ['employed', 'freelancer']).notNullable();
    t.integer('idExperiences').notNullable();
    t.foreign('idExperiences').references('id').inTable('experiences');
  });
}

export async function down(knex: Knex): Promise<Knex.SchemaBuilder> {
  return knex.schema.dropTable(tableName);
}
