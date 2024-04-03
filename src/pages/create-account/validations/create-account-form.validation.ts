import { FormValidationResult } from "@/common/validations/validation.model";
import { Account, AccountError } from "../create-account.vm";
import {
  validateNameField,
  validateTypeField,
} from "./create-account-field.validation";

export const validateCreateAccountForm = (
  dataForm: Account
): FormValidationResult<AccountError> => {
  const fieldsValidationsResults = [
    validateTypeField(dataForm.type),
    validateNameField(dataForm.name),
  ];

  return {
    succeeded: fieldsValidationsResults.every((f) => f.succeeded),
    errors: {
      type: fieldsValidationsResults[0].errorMessage ?? "",
      name: fieldsValidationsResults[1].errorMessage ?? "",
    },
  };
};
