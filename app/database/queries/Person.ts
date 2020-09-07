import Person from '../models/Person';
import { NonExistentPersonTag } from '../../global/consts';

function postPerson(args: any): Promise<Person> {
  return Person.query().insert(args).returning('*');
}

function getPersonByPathname(pathname: string): Promise<Person> {
  return Person.query().findOne({ pathname }).sendNotFoundError(NonExistentPersonTag);
}

function getPersonIDByPathname(pathname: string): Promise<Person> {
  return Person.query().findOne({ pathname }).select('id').sendNotFoundError(NonExistentPersonTag);
}

export default {
  postPerson,
  getPersonByPathname,
  getPersonIDByPathname
};
