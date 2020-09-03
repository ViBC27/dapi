import BaseModel from './BaseModel';

class Language extends BaseModel {
  id: number;
  name: string;
  level: string;
  createdAt: Date;
  updatedAt: Date;
  idPersons: number;
  static tableName = 'languages';
}

export default Language;
