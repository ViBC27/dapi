import $ from '../../global/$';
import Person from '../../../database/models/Person';
import getPersonByPathname from '../functions/getPersonByPathname';

async function resolve(args: any): Promise<Person[]> {
  const person = getPersonByPathname(args.pathname);
  return $.createMessage(await person);
}

export default async function (parent: any, args: any): Promise<Person[]> {
  return Promise.resolve(resolve(args));
}
