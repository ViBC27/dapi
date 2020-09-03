import $ from '../../global/$';
import flatten from 'lodash/flatten';
import Experience from '../../../database/models/Experience';
import getExperiencesByID from '../functions/getExperiencesByID';

type ExpArray = [Experience[], Experience[]];

async function resolve(args: any): Promise<Experience[]> {
  const idPerson = await $.getPersonIDByPathname(args.pathname);
  const expList: ExpArray = await getExperiencesByID(idPerson.id);
  const neoExpList = flatten(expList);
  return $.createMessage(neoExpList);
}

export default async function (parent: any, args: any): Promise<Experience[]> {
  return Promise.resolve(resolve(args));
}
