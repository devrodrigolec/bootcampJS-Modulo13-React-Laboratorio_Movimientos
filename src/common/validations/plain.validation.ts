import validator from "validator";

export const isValidIban = (iban: string): boolean => {
  return validator.isIBAN(iban);
};

export const isPositiveNumber = (amount: number): boolean => amount > 0;

export const isDayAfterToday = (date: Date): boolean => date > new Date();

export const isEmailWellFormed = (email: string): boolean =>
  validator.isEmail(email);

export const isStringValueInformed = (field: string): boolean => field !== "";

export const isValueNotNullOrUndefined = <T>(value: T): boolean =>
  value !== null && value !== undefined;
