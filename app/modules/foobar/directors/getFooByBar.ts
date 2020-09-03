async function resolve(args: any): Promise<any> {
  return Promise.resolve(args.some);
}

export default async function (parent: any, args: any): Promise<any> {
  return Promise.resolve(resolve(args));
}
