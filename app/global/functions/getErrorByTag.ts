import tags from '../errors/tags';
import bodies from '../errors/bodies';
import names from '../errors/names';
import iError from '../interfaces/iError';

export default function getErrorByTag(tag: number): iError {
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
