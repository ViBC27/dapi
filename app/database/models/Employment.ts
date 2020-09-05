import BaseModelV1 from './BaseModelV1';

class Employment extends BaseModelV1 {
  id: number;
  price: number;
  mode: string;
  idExperiences: number;
  static tableName = 'employments';
}

export default Employment;
