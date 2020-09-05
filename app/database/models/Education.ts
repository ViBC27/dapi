import BaseModelV2 from './BaseModelV2';
import EducationQueries from '../queries/Education';

class Education extends BaseModelV2 {
  id: number;
  level: string;
  status: string;
  course: string;
  endDate: Date;
  startDate: Date;
  workLoad: number;
  idPersons: number;
  institution: string;
  static tableName = 'educations';
  static getEducationsByID = EducationQueries.getEducationsByID;
}

export default Education;
