import path from 'path';
import $ from '../../../global/$';
import { loadFilesSync, mergeResolvers } from 'graphql-tools';

const localDirname = path.dirname(__dirname);
const localResolvers = loadFilesSync(path.join(localDirname, './resolvers'));
export default mergeResolvers([...localResolvers, ...$.resolverDefs]);
