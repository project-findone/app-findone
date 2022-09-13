/* eslint-disable no-return-assign */
import { ValidationError } from 'yup';

interface Error {
  [key: string]: string;
}

export function getValidationErrors(error: ValidationError): Error {
  const validationErrors: Error = {};

  console.log(error);

  error.inner.forEach((err) => validationErrors[err.path as string] = err.message);

  return validationErrors;
}
