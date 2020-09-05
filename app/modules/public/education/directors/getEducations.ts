import Person from '../../../../database/models/Person';
import Education from '../../../../database/models/Education';

export default async function (root: any, args: any): Promise<Education[]> {
  const person = await Person.getPersonIDByPathname(args.pathname);
  return Education.getEducationsByID(person.id);
}
