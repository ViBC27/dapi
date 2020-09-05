import BaseModelV1 from '../models/BaseModelV1';
import { notFoundErrorArgs } from '../../global/types';
import NotFoundError from '../collection/NotFoundError';

function notFoundError(args: notFoundErrorArgs): NotFoundError {
  return new BaseModelV1.NotFoundError(args);
}

export default {
  notFoundError
};
