import Knex from 'knex';
import config from '../knexfile';
import { Model } from 'objection';

const database = Knex(config);
Model.knex(database);

export default database;
