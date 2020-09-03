import BaseModel from './BaseModel';

class Employment extends BaseModel {
  id: number;
  price: number;
  mode: string;
  idExperiences: number;
  static tableName = 'employments';
}

export default Employment;
