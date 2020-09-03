import * as Knex from 'knex';
import Person from '../models/Person';

export async function seed(knex: Knex): Promise<Person[]> {
  return Person.query(knex).insert([
    {
      id: 1,
      identity: '12345678900',
      name: 'Cristiano Ronaldo',
      email: 'ronaldo@soccer.br',
      pathname: 'ronaldo',
      username: 'ronaldo',
      password: 'Hahaha!',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      identity: '12345678901',
      name: 'Napoléon Bonaparte',
      email: 'napoleon@history.com',
      pathname: 'napoleon',
      username: 'napoleon',
      password: 'Hahaha!',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      identity: '12345678902',
      name: 'Kakaroto Ball',
      email: 'kakaroto@ball.br',
      pathname: 'kakaroto',
      username: 'kakaroto',
      password: 'Hahaha!',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 4,
      identity: '12345678903',
      name: 'Lionel The Best',
      email: 'lionel@soccer.com',
      pathname: 'lionel',
      username: 'lionel',
      password: 'Hahaha!',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 5,
      identity: '12345678904',
      name: 'Jamp Donald',
      email: 'donald@jamp.com',
      pathname: 'donald',
      username: 'donald',
      password: 'Hahaha!',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
}
