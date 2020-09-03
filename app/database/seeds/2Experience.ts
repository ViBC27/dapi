import * as Knex from 'knex';
import Experience from '../models/Experience';

export async function seed(knex: Knex): Promise<Experience[]> {
  return Experience.query(knex).insert([
    {
      id: 1,
      url: 'https://america.com',
      role: 'Senior Programmer',
      name: 'Americatty Premium',
      type: 'employment',
      notes: 'Very good!',
      github: 'https://git.com',
      bitbucket: 'https://git.com',
      admissionAt: new Date(),
      dismissalAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      idPersons: 1
    },
    {
      id: 2,
      url: 'https://america.com',
      role: 'Full Programmer',
      name: 'Americatty Premium',
      type: 'employment',
      notes: 'Very enriching!',
      github: 'https://git.com',
      bitbucket: 'https://git.com',
      admissionAt: new Date(),
      dismissalAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      idPersons: 1
    },
    {
      id: 3,
      url: 'https://america.com',
      role: 'Junior programmer',
      name: 'Americatty Premium',
      type: 'employment',
      notes: 'Very encouraging!',
      github: 'https://git.com',
      bitbucket: 'https://git.com',
      admissionAt: new Date(),
      dismissalAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      idPersons: 1
    },
    {
      id: 4,
      url: 'https://america.com',
      role: 'Senior Programmer',
      name: 'Americatty Premium',
      type: 'employment',
      notes: 'Very good!',
      github: 'https://git.com',
      bitbucket: 'https://git.com',
      admissionAt: new Date(),
      dismissalAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      idPersons: 2
    },
    {
      id: 5,
      url: 'https://edge.com',
      role: 'Intern',
      name: 'Egde Brazil',
      type: 'educational',
      notes: 'Very good!',
      github: 'https://git.com',
      bitbucket: 'https://git.com',
      admissionAt: new Date(),
      dismissalAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      idPersons: 3
    }
  ]);
}
