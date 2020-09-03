import BaseModel from './BaseModel';

class Education extends BaseModel {
  id: number;
  level: string;
  status: string;
  course: string;
  endDate: Date;
  startDate: Date;
  createdAt: Date;
  updatedAt: Date;
  workLoad: number;
  idPersons: number;
  institution: string;
  static tableName = 'educations';
}

export default Education;
