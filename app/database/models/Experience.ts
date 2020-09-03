import path from 'path';
import { RelationMappings } from 'objection';
import BaseModel from './BaseModel';

class Experience extends BaseModel {
  id: number;
  url: string;
  role: string;
  name: string;
  type: string;
  notes: string;
  github: string;
  bitbucket: string;
  createdAt: Date;
  updatedAt: Date;
  idPersons: number;
  admissionAt: Date;
  dismissalAt: Date;
  static tableName = 'experiences';
  static get relationMappings(): RelationMappings {
    return {
      employments: {
        relation: BaseModel.HasOneRelation,
        modelClass: path.join(__dirname, 'Employment'),
        join: {
          from: 'experiences.id',
          to: 'employments.idExperiences'
        }
      },
      educationals: {
        relation: BaseModel.HasOneRelation,
        modelClass: path.join(__dirname, 'Educational'),
        join: {
          from: 'experiences.id',
          to: 'educationals.idExperiences'
        }
      }
    };
  }
}

export default Experience;
