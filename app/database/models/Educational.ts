import BaseModelV1 from './BaseModelV1';

class Educational extends BaseModelV1 {
  id: number;
  advisor: string;
  discipline: string;
  idExperiences: number;
  static tableName = 'educationals';
}

export default Educational;
