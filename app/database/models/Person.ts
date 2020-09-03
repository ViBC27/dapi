import path from 'path';
import { RelationMappings } from 'objection';
import BaseModel from './BaseModel';

class Person extends BaseModel {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  pathname: string;
  username: string;
  password: string;
  identity: string;
  static tableName = 'persons';
  static get relationMappings(): RelationMappings {
    return {
      experiences: {
        relation: BaseModel.HasManyRelation,
        modelClass: path.join(__dirname, 'Experience'),
        join: { from: 'persons.id', to: 'experiences.idPersons' }
      }
    };
  }
}

export default Person;
