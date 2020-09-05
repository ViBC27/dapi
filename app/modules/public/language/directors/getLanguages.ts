import Person from '../../../../database/models/Person';
import Language from '../../../../database/models/Language';

export default async function (root: any, args: any): Promise<Language[]> {
  const person = await Person.getPersonIDByPathname(args.pathname);
  return Language.getLanguagesByID(person.id);
}
