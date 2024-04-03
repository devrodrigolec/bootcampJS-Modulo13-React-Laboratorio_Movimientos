import { FieldValidationResult } from "@/common/validations/validation.model";
import {
  buildRequiredFieldValidationFailerResponse,
  buildValidationSuccededResult,
  isStringValueInformed,
} from "@/common/validations";

export const validateTypeField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailerResponse();
  }

  return buildValidationSuccededResult();
};

export const validateNameField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailerResponse();
  }

  return buildValidationSuccededResult();
};
