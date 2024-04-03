import { FieldValidationResult } from "./validation.model";
import { REQUIRED_FIELD_MESSAGE } from "./validations.const";

export const buildValidationFailedResult = (
  message: string
): FieldValidationResult => {
  return {
    succeeded: false,
    errorMessage: message,
  };
};

export const buildValidationSuccededResult = (): FieldValidationResult => {
  return {
    succeeded: true,
  };
};

export const buildRequiredFieldValidationFailerResponse = () =>
  buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);