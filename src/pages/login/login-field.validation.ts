import {
  buildRequiredFieldValidationFailerResponse,
  buildValidationSuccededResult,
  isStringValueInformed,
} from "@/common/validations";
import { FieldValidationResult } from "@/common/validations/validation.model";

export const validateUserField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailerResponse();
  }

  return buildValidationSuccededResult();
};

export const validatePasswordField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailerResponse();
  }

  return buildValidationSuccededResult();
};
