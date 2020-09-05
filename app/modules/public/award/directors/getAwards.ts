import Award from '../../../../database/models/Award';
import Person from '../../../../database/models/Person';

export default async function (root: any, args: any): Promise<Award[]> {
  const person = await Person.getPersonIDByPathname(args.pathname);
  return Award.getAwardsByID(person.id);
}
