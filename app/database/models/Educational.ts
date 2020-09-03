import BaseModel from './BaseModel';

class Educational extends BaseModel {
  id: number;
  advisor: string;
  discipline: string;
  idExperiences: number;
  static tableName = 'educationals';
}

export default Educational;
