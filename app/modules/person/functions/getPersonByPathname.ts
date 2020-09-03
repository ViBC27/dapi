import Person from '../../../database/models/Person';
const NonExistentPersonTag = 11;

export default function getPersonByPathname(pathname: string): Promise<Person> {
  return Person.transaction(trx =>
    Person.query(trx)
      .select(['name', 'email', 'pathname'])
      .where({ pathname })
      .first()
      .sendNotFoundError({ tag: NonExistentPersonTag })
  );
}
