import BaseModelV2 from './BaseModelV2';
import ExperienceQueries from '../queries/Experience';
import ExperienceMappings from '../mappings/Experience';

class Experience extends BaseModelV2 {
  id: number;
  url: string;
  role: string;
  name: string;
  type: string;
  notes: string;
  github: string;
  bitbucket: string;
  idPersons: number;
  admissionAt: Date;
  dismissalAt: Date;
  static tableName = 'experiences';
  static relationMappings = ExperienceMappings;
  static getExperiencesByID = ExperienceQueries.getExperiencesByID;
}

export default Experience;
