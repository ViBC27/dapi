import BaseModelV2 from './BaseModelV2';
import AwardQueries from '../queries/Award';

class Award extends BaseModelV2 {
  id: number;
  year: Date;
  name: string;
  entity: string;
  idPersons: number;
  static tableName = 'awards';
  static getAwardsByID = AwardQueries.getAwardsByID;
}

export default Award;
