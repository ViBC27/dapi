import * as Knex from 'knex';

const tableName = 'experiences';
export async function up(knex: Knex): Promise<Knex.SchemaBuilder> {
  return knex.schema.createTable(tableName, t => {
    t.increments('id').primary().notNullable();
    t.string('url', 100).nullable();
    t.string('github', 100).nullable();
    t.string('bitbucket', 100).nullable();
    t.string('role', 100).notNullable();
    t.string('name', 100).notNullable();
    t.string('notes', 250).notNullable();
    t.enum('type', ['employment', 'educational']).notNullable();
    t.date('admissionAt').notNullable();
    t.date('dismissalAt').nullable();
    t.timestamp('createdAt').notNullable();
    t.timestamp('updatedAt').nullable();
    t.integer('idPersons').notNullable();
    t.foreign('idPersons').references('id').inTable('persons');
  });
}

export async function down(knex: Knex): Promise<Knex.SchemaBuilder> {
  return knex.schema.dropTable(tableName);
}
