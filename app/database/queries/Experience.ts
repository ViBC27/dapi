import Experience from '../models/Experience';

function getExperiencesByID(idPerson: number): Promise<[Experience[], Experience[]]> {
  return Experience.transaction(trx => {
    return Promise.all([
      Experience.query(trx).select().where({ idPersons: idPerson }).joinRelated('employments'),
      Experience.query(trx).select().where({ idPersons: idPerson }).joinRelated('educationals')
    ]);
  });
}

export default {
  getExperiencesByID
};
