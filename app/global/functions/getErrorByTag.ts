import tags from '../errors/tags';
import names from '../errors/names';
import { appError } from '../types';
import bodies from '../errors/bodies';

export default function getErrorByTag(tag: number): appError {
  const code = tags[tag];
  if (!code) {
    const code = tags[0];
    const body: any = bodies[0];
    const name: any = names[code];
    const message = { name, body };
    const error = { code, tag, message };
    return error;
  }
  const body: any = bodies[tag];
  const name: any = names[code];
  const message = { name, body };
  const error = { code, tag, message };
  return error;
}
