import flatten from 'lodash/flatten';
import Person from '../../../../database/models/Person';
import Experience from '../../../../database/models/Experience';

export default async function (root: any, args: any): Promise<Experience[]> {
  const person = await Person.getPersonIDByPathname(args.pathname);
  const expList = await Experience.getExperiencesByID(person.id);
  return flatten(expList);
}
