import { Model } from 'objection';
import BaseBuilder from './BaseBuilder';
import NotFoundError from '../collection/NotFoundError';
import BaseModelV1Queries from '../queries/BaseModelV1';

class BaseModelV1 extends Model {
  static useLimitInFirst = true;
  static modelPaths = [__dirname];
  static QueryBuilder = BaseBuilder;
  static NotFoundError = NotFoundError;
  QueryBuilderType!: BaseBuilder<this>;
  static notFoundError = BaseModelV1Queries.notFoundError;
}

export default BaseModelV1;
