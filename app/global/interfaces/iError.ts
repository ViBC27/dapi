import iErrorMsg from './iErrorMsg';

export default interface iError {
  code: number;
  tag: number;
  message: iErrorMsg;
}
