import * as Knex from 'knex';
import Language from '../models/Language';

export function seed(knex: Knex): Promise<Language[]> {
  return Language.query(knex).insert([
    {
      id: 1,
      name: 'portuguese',
      level: 'intermediate',
      createdAt: new Date(),
      updatedAt: new Date(),
      idPersons: 1
    },
    {
      id: 2,
      name: 'english',
      level: 'basic',
      createdAt: new Date(),
      updatedAt: new Date(),
      idPersons: 1
    },
    {
      id: 3,
      name: 'spanish',
      level: 'basic',
      createdAt: new Date(),
      updatedAt: new Date(),
      idPersons: 1
    }
  ]);
}
