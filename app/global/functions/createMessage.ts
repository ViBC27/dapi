export default function createMessage<T>(message: T | T[]): T[] {
  return Array.isArray(message) ? message : [message];
}
