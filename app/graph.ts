import { GraphQLSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';
import { IncomingMessage, ServerResponse } from 'http';

function customFormatErrorFn(error: any) {
  return { message: error.message, extensions: error.extensions };
}

type Request = IncomingMessage;
type Response = ServerResponse & { json?: (data: unknown) => void };
type Middleware = (request: Request, response: Response) => Promise<void>;

export function use(schema: GraphQLSchema): Middleware {
  return graphqlHTTP({ schema, customFormatErrorFn, graphiql: true });
}

export default {
  use
};
