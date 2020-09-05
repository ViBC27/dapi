import * as Knex from 'knex';
import Award from '../models/Award';

export function seed(knex: Knex): Promise<Award[]> {
  return Award.query(knex).insert([
    {
      id: 1,
      name: 'Bronze Medal',
      entity: 'Olympics',
      year: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      idPersons: 1
    },
    {
      id: 2,
      name: 'Silver Medal',
      entity: 'Tournament',
      year: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      idPersons: 1
    }
  ]);
}
