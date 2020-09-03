import * as Knex from 'knex';
import Education from '../models/Education';

export async function seed(knex: Knex): Promise<Education[]> {
  return Education.query(knex).insert([
    {
      id: 1,
      level: 'graduate',
      status: 'progress',
      course: 'Soccer',
      institution: 'Camp Nou',
      endDate: new Date(),
      startDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      workLoad: 3000,
      idPersons: 1
    },
    {
      id: 2,
      level: 'high',
      status: 'concluded',
      course: 'Medium',
      institution: 'Moreira',
      endDate: new Date(),
      startDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      workLoad: 2500,
      idPersons: 1
    },
    {
      id: 3,
      level: 'primary',
      status: 'canceled',
      course: 'Fundamental',
      institution: 'Miranda',
      endDate: new Date(),
      startDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      workLoad: 2000,
      idPersons: 2
    }
  ]);
}
