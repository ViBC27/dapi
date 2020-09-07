import BaseModelV2 from './BaseModelV2';
import PersonQueries from '../queries/Person';
import PersonMappings from '../mappings/Person';

class Person extends BaseModelV2 {
  id: number;
  name: string;
  email: string;
  pathname: string;
  username: string;
  password: string;
  identity: string;
  static tableName = 'persons';
  static relationMappings = PersonMappings;
  static postPerson = PersonQueries.postPerson;
  static getPersonByPathname = PersonQueries.getPersonByPathname;
  static getPersonIDByPathname = PersonQueries.getPersonIDByPathname;
}

export default Person;
