import Education from '../models/Education';

function getEducationsByID(idPerson: number): Promise<Education[]> {
  return Education.query().select().where({ idPersons: idPerson });
}

export default {
  getEducationsByID
};
