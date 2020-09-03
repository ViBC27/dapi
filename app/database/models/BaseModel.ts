import { Model } from 'objection';
import BaseBuilder from './BaseBuilder';
import iError from '../../global/interfaces/iError';
import NotFoundError from '../../global/classes/NotFoundError';

class BaseModel extends Model {
  QueryBuilderType!: BaseBuilder<this>;
  static QueryBuilder = BaseBuilder;
  static notFoundError(ctx: any, args: { tag?: number; error?: iError }): NotFoundError {
    if (args.error) return new NotFoundError(undefined, args.error);
    if (args.tag) return new NotFoundError(args.tag);
    return new NotFoundError();
  }
}

export default BaseModel;
