import typeDefs from './typeDefs';
import resolverDefs from './resolverDefs';
import { makeExecutableSchema } from 'graphql-tools';

export default makeExecutableSchema({ typeDefs, resolvers: resolverDefs });
