import isNumber from 'lodash/isNumber';
import { appError, appErrorArgs } from '../../global/types';
import getErrorByTag from '../../global/functions/getErrorByTag';

class AppError extends Error {
  message: string;
  extensions: appError;
  constructor(args: appErrorArgs = 0) {
    super();
    const newError = isNumber(args) ? getErrorByTag(args) : args;
    this.message = newError.message.body.en;
    this.extensions = newError;
  }
}

export default AppError;
