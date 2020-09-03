import Person from '../../../database/models/Person';

const NonExistentPersonTag = 11;

export default function getPersonIDByPathname(pathname: string): Promise<Person> {
  return Person.transaction(trx =>
    Person.query(trx)
      .select('id')
      .where({ pathname })
      .first()
      .sendNotFoundError({ tag: NonExistentPersonTag })
  );
}
