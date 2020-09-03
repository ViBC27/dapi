import BaseModel from './BaseModel';

class Award extends BaseModel {
  id: number;
  name: string;
  entity: string;
  year: Date;
  createdAt: Date;
  updatedAt: Date;
  idPersons: number;
  static tableName = 'awards';
}

export default Award;
