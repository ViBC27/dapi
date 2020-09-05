import * as Knex from 'knex';
import Educational from '../models/Educational';

export function seed(knex: Knex): Promise<Educational[]> {
  return Educational.query(knex).insert([
    {
      id: 1,
      advisor: 'Márcio Ribeiro',
      discipline: 'Data Structures',
      idExperiences: 5
    }
  ]);
}
