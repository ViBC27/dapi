import AppError from './AppError';
import { notFoundErrorArgs } from '../../global/types';

class NotFoundError extends AppError {
  constructor(args: notFoundErrorArgs) {
    if (args) super(args);
    else super(404);
  }
}

export default NotFoundError;
