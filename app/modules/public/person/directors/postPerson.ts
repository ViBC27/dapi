import Person from '../../../../database/models/Person';

export default function (root: any, args: any): Promise<Person> {
  return Person.postPerson(args);
}
