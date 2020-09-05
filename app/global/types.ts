// ERROR
export type textError = { pt: string; en: string };
export type ErrorMsg = { name: textError; body: textError };
export type appError = { code: number; tag: number; message: ErrorMsg };

export type appErrorArgs = number | appError;
export type notFoundErrorArgs = number | undefined | appError;

// DATABASE
export type attributeExistsArgs = { [attribute: string]: string };

// MODULES
