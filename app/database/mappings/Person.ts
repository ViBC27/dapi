import { RelationMappings } from 'objection';
import BaseModelv2 from '../models/BaseModelV2';

const Person: RelationMappings = {
  awards: {
    modelClass: 'Award',
    relation: BaseModelv2.HasManyRelation,
    join: { from: 'persons.id', to: 'awards.idPersons' }
  },
  languages: {
    modelClass: 'Language',
    relation: BaseModelv2.HasManyRelation,
    join: { from: 'persons.id', to: 'languages.idPersons' }
  },
  educations: {
    modelClass: 'Education',
    relation: BaseModelv2.HasManyRelation,
    join: { from: 'persons.id', to: 'educations.idPersons' }
  },
  experiences: {
    modelClass: 'Experience',
    relation: BaseModelv2.HasManyRelation,
    join: { from: 'persons.id', to: 'experiences.idPersons' }
  }
};

export default Person;
