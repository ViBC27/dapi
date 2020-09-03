import { isEmpty } from 'lodash';
import { QueryBuilder, Model, Page } from 'objection';
import BaseModel from './BaseModel';
import iError from '../../global/interfaces/iError';

class BaseBuilder<M extends Model, R = M[]> extends QueryBuilder<M, R> {
  ArrayQueryBuilderType!: BaseBuilder<M, M[]>;
  SingleQueryBuilderType!: BaseBuilder<M, M>;
  NumberQueryBuilderType!: BaseBuilder<M, number>;
  PageQueryBuilderType!: BaseBuilder<M, Page<M>>;
  sendNotFoundError(args: { tag?: number; error?: iError }): this {
    return this.runAfter(result => {
      if (!isEmpty(result)) return result;
      throw BaseModel.notFoundError(this.context, args);
    });
  }
}
export default BaseBuilder;
