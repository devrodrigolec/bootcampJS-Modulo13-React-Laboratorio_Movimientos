import { FormValidationResult } from "@/common/validations/validation.model";
import { CredentialFormErrors } from "./login.vm";
import {
  validatePasswordField,
  validateUserField,
} from "./login-field.validation";

export const validateForm = (
  credentials: CredentialFormErrors
): FormValidationResult<CredentialFormErrors> => {
  const fieldValidationResults = [
    validateUserField(credentials.user),
    validatePasswordField(credentials.password),
  ];

  return {
    succeeded: fieldValidationResults.every((field) => field.succeeded),
    errors: {
      user: fieldValidationResults[0].errorMessage ?? "",
      password: fieldValidationResults[1].errorMessage ?? "",
    },
  };
};
