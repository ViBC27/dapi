import path from 'path';
import $ from '../../global/$';
import { loadFilesSync, mergeTypeDefs } from 'graphql-tools';

const localDirname = path.dirname(__dirname);
const localTypeDefs = loadFilesSync(path.join(localDirname, './types'));
export default mergeTypeDefs([...localTypeDefs, ...$.typeDefs]);
