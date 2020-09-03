import morgan from 'morgan';
import graph from './graph';
import express from 'express';
import database from './base';
import modules from './modules/global/*';
import cookieParser from 'cookie-parser';

const app = express();
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.locals.database = database;

// Routes
// app.use('/getAwards', graphqlHTTP({ schema: ExperienceSGQl, graphiql: true }));
// app.use('/getLanguages', graphqlHTTP({ schema: ExperienceSGQl, graphiql: true }));
// app.use('/getEducations', graphqlHTTP({ schema: ExperienceSGQl, graphiql: true }));

app.use('/getPerson', graph.use(modules.PersonSGQL));
app.use('/getExperiences', graph.use(modules.ExperienceSGQL));

export default app;
