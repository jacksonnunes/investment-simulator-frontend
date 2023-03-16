import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach(error => {
    // eslint-disable-next-line no-unused-expressions
    error.path ? (validationErrors[error.path] = error.message) : null;
  });

  return validationErrors;
}