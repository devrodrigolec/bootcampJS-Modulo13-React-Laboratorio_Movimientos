import {
  INVALID_AMOUNT_MESSAGE,
  INVALID_IBAN_MESSAGE,
  INVALID_REAL_DATE_TRANSFER_MESSAGE,
  REQUIRED_FIELD_MESSAGE,
} from "@/common/validations/validations.const";
import {
  validateIBANField,
  validateAccountIdField,
  validateNameField,
  validateAmountField,
  validateConceptField,
  validateRealDateTransferField,
  validateEmailField,
} from "./transfer-field-validation";

describe("transfer-field.validation specs", () => {
  describe("validateEmailFiled", () => {
    it("should return true if value is null or undefined", () => {
      //Arrange
      const value = "";
      //Act
      const result = validateEmailField(value);
      //Assert
      expect(result.succeeded).toBeTruthy();
    });

    it("should return false if email is not well formed", () => {
      //Arrange
      const value = "admin@email";
      //Act
      const result = validateEmailField(value);
      //Assert
      expect(result.succeeded).toBeFalsy();
    });
    it("should return true if email is well formed", () => {
      //Arrange
      const value = "admin@email.com";
      //Act
      const result = validateEmailField(value);
      //Assert
      expect(result.succeeded).toBeTruthy();
    });
  });

  describe("validateRealDateTransferField", () => {
    it("should return true when date is not informed", () => {
      // Arrange
      const value = undefined;

      // Act
      const result = validateRealDateTransferField(value);

      // Assert
      expect(result.succeeded).toBeTruthy();
    });

    it("should return false when date is before today", () => {
      // Arrange
      const value = new Date();
      value.setDate(value.getDate() - 1);

      // Act
      const result = validateRealDateTransferField(value);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(INVALID_REAL_DATE_TRANSFER_MESSAGE);
    });

    it("should return true when date is after today", () => {
      // Arrange
      const value = new Date();
      value.setDate(value.getDate() + 1);

      // Act
      const result = validateRealDateTransferField(value);

      // Assert
      expect(result.succeeded).toBeTruthy();
    });
  });

  describe("validateConceptField", () => {
    it("should return a error message if value is empty", () => {
      //Arrange
      const value = "";
      //Act
      const result = validateConceptField(value);
      //Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });

    it("should return true if value is not empty", () => {
      //Arrange
      const value = "Hola";
      //Act
      const result = validateConceptField(value);
      //Assert
      expect(result.succeeded).toBeTruthy();
    });
  });

  describe("validateAmountField", () => {
    it("should return a invalida amount message if value is less at 0", () => {
      //Arrange
      const value = -1;
      //Act
      const result = validateAmountField(value);
      //Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(INVALID_AMOUNT_MESSAGE);
    });

    it("should return true if the field is not empty and if value is more than 0", () => {
      //Arrange
      const value = 20;
      //Act
      const result = validateAmountField(value);
      //Assert
      expect(result.succeeded).toBeTruthy();
    });
  });

  describe("validateNameField", () => {
    it("should return false when the account is empty", () => {
      //Arrange
      const value = "";
      //Act
      const result = validateNameField(value);
      //Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });
    it("should return false when the account is empty", () => {
      //Arrange
      const value = "Rodrigo Leciñana";
      //Act
      const result = validateNameField(value);
      //Assert
      expect(result.succeeded).toBeTruthy();
    });
  });
  describe("validateACcountField", () => {
    it("should return false when the account is empty", () => {
      //Arrange
      const value = "";
      //Act
      const result = validateAccountIdField(value);
      //Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });
  });

  describe("validateIBANField", () => {
    it("should return false when iban is empty", () => {
      // Arrange
      const value = "";
      // Act
      const result = validateIBANField(value);
      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });
    it("should return false when iban is not well formed", () => {
      // Arrange
      const value = "ES91 2100 0418 4502 0003 1333";
      // Act
      const result = validateIBANField(value);
      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(INVALID_IBAN_MESSAGE);
    });
    it("should return true when iban is well formed", () => {
      // Arrange
      const value = "ES91 2100 0418 4502 0005 1332";
      // Act
      const result = validateIBANField(value);
      // Assert
      expect(result.succeeded).toBeTruthy();
    });
  });
});
