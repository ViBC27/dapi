import iError from '../interfaces/iError';
import getErrorByTag from '../functions/getErrorByTag';

class AppError extends Error {
  message: string;
  extensions: iError;
  constructor(tag = 0, error?: iError) {
    super();
    const neoError = error || getErrorByTag(tag);
    this.message = neoError.message.body.en;
    this.extensions = neoError;
  }
}

export default AppError;
