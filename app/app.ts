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
app.use('/getAwards', graph.use(modules.AwardSGQL));
app.use('/getPerson', graph.use(modules.PersonSGQL));
app.use('/getLanguages', graph.use(modules.LanguageSGQL));
app.use('/getEducations', graph.use(modules.EducationSGQL));
app.use('/getExperiences', graph.use(modules.ExperienceSGQL));

export default app;
