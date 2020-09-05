import * as Knex from 'knex';
import Employment from '../models/Employment';

export function seed(knex: Knex): Promise<Employment[]> {
  return Employment.query(knex).insert([
    {
      id: 1,
      price: 500,
      mode: 'freelancer',
      idExperiences: 1
    },
    {
      id: 2,
      price: 500,
      mode: 'employed',
      idExperiences: 2
    },
    {
      id: 3,
      mode: 'employed',
      idExperiences: 3
    },
    {
      id: 4,
      price: 500,
      mode: 'freelancer',
      idExperiences: 4
    }
  ]);
}
