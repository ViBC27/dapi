import AppError from '../../global/classes/AppError';
import iError from '../../global/interfaces/iError';

class NotFoundError extends AppError {
  constructor(tag?: number, error?: iError) {
    if (error) super(undefined, error);
    else if (tag) super(tag);
    else super(404);
  }
}

export default NotFoundError;
