import Award from '../models/Award';

function getAwardsByID(idPerson: number): Promise<Award[]> {
  return Award.query().select().where({ idPersons: idPerson });
}

export default {
  getAwardsByID
};
