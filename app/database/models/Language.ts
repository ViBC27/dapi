import BaseModelV2 from './BaseModelV2';
import LanguageQueries from '../queries/Language';

class Language extends BaseModelV2 {
  id: number;
  name: string;
  level: string;
  idPersons: number;
  static tableName = 'languages';
  static getLanguagesByID = LanguageQueries.getLanguagesByID;
}

export default Language;
