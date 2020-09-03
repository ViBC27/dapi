import path from 'path';
import { loadFilesSync } from 'graphql-tools';
import createMessage from '../../global/functions/createMessage';
import getPersonIDByPathname from '../../graphql/pathname/functions/getPersonIDByPathname';

const appDirname = path.dirname(path.dirname(__dirname));
const typeDefs = loadFilesSync(path.join(appDirname, '/graphql/**/types/*.graphql'));
const resolverDefs = loadFilesSync(path.join(appDirname, '/graphql/**/resolvers/*.ts'));

export { typeDefs, resolverDefs, createMessage, getPersonIDByPathname };

export default {
  typeDefs,
  resolverDefs,
  createMessage,
  getPersonIDByPathname
};
