import {
  isValidIban,
  isStringValueInformed,
  isPositiveNumber,
  isValueNotNullOrUndefined,
  isDayAfterToday,
  isEmailWellFormed,
  buildValidationFailedResult,
  buildValidationSuccededResult,
  buildRequiredFieldValidationFailerResponse,
} from "@/common/validations";
import { FieldValidationResult } from "@/common/validations/validation.model";

import {
  INVALID_AMOUNT_MESSAGE,
  INVALID_EMAIL_MESSAGE,
  INVALID_IBAN_MESSAGE,
  INVALID_REAL_DATE_TRANSFER_MESSAGE,
} from "@/common/validations/validations.const";



export const validateIBANField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailerResponse();
  }

  if (!isValidIban(value)) {
    return buildValidationFailedResult(INVALID_IBAN_MESSAGE);
  }

  return buildValidationSuccededResult();
};

export const validateAccountIdField = (
  value: string
): FieldValidationResult => {
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

export const validateAmountField = (value: number) => {
  if (!isPositiveNumber(value)) {
    return buildValidationFailedResult(INVALID_AMOUNT_MESSAGE);
  }

  return buildValidationSuccededResult();
};

export const validateConceptField = (value: string) => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailerResponse();
  }

  return buildValidationSuccededResult();
};

export const validateRealDateTransferField = (
  value?: Date
): FieldValidationResult => {
  if (!isValueNotNullOrUndefined(value)) {
    return buildValidationSuccededResult();
  }

  if (value && !isDayAfterToday(value)) {
    return buildValidationFailedResult(INVALID_REAL_DATE_TRANSFER_MESSAGE);
  }

  return buildValidationSuccededResult();
};

export const validateEmailField = (value?: string) => {
  if (value && !isStringValueInformed(value)) {
    return buildValidationSuccededResult();
  }

  if (value && !isEmailWellFormed(value)) {
    return buildValidationFailedResult(INVALID_EMAIL_MESSAGE);
  }

  return buildValidationSuccededResult();
};

export const validateNotesField = (_: string) =>
  buildValidationSuccededResult();
export { INVALID_REAL_DATE_TRANSFER_MESSAGE };
