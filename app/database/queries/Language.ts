import Language from '../models/Language';

function getLanguagesByID(idPerson: number): Promise<Language[]> {
  return Language.query().select().where({ idPersons: idPerson });
}

export default {
  getLanguagesByID
};
