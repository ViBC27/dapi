import isEmpty from 'lodash/isEmpty';
import BaseModelV1 from './BaseModelV1';
import { QueryBuilder, Model, Page, SingleQueryBuilder } from 'objection';
import { notFoundErrorArgs, attributeExistsArgs } from '../../global/types';

class BaseBuilder<M extends Model, R = M[]> extends QueryBuilder<M, R> {
  ArrayQueryBuilderType!: BaseBuilder<M, M[]>;
  SingleQueryBuilderType!: BaseBuilder<M, M>;
  NumberQueryBuilderType!: BaseBuilder<M, number>;
  PageQueryBuilderType!: BaseBuilder<M, Page<M>>;
  sendNotFoundError(args: notFoundErrorArgs): this {
    return this.runAfter(result => {
      if (!isEmpty(result)) return result;
      throw BaseModelV1.notFoundError(args);
    });
  }
  // TODO: AJEITAR ESSE MÉTODO
  attributeExists(args: attributeExistsArgs): SingleQueryBuilder<this> {
    return this.count('*').findOne(args);
  }
}
export default BaseBuilder;
