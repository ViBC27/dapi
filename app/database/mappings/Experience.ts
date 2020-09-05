import { RelationMappings } from 'objection';
import BaseModelv2 from '../models/BaseModelV2';

const Experience: RelationMappings = {
  employments: {
    modelClass: 'Employment',
    relation: BaseModelv2.HasOneRelation,
    join: { from: 'experiences.id', to: 'employments.idExperiences' }
  },
  educationals: {
    modelClass: 'Educational',
    relation: BaseModelv2.HasOneRelation,
    join: { from: 'experiences.id', to: 'educationals.idExperiences' }
  }
};

export default Experience;
