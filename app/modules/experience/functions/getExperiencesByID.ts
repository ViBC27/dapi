import Experience from '../../../database/models/Experience';

type ExpArray = Promise<[Experience[], Experience[]]>;

export default function (idPerson: number): ExpArray {
  return Experience.transaction(trx =>
    Promise.all([
      Experience.query(trx).select('*').where({ idPersons: idPerson }).joinRelated('employments'),
      Experience.query(trx).select('*').where({ idPersons: idPerson }).joinRelated('educationals')
    ])
  );
}
