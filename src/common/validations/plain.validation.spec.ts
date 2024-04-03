import { isValidIban, isValueNotNullOrUndefined } from "./plain.validation";

describe("plain.validation", () => {


  describe('isValueNotNullOrUndefined', () => {
    it('should return false if value is null', () => {
      //Arrange
      const value = null;
      //ACt
      const result = isValueNotNullOrUndefined(value);
      //ASsert
      expect(result).toBeFalsy();
    })
    it('should return false if value is undefined', () => {
      //Arrange
      const value = undefined;
      //ACt
      const result = isValueNotNullOrUndefined(value);
      //ASsert
      expect(result).toBeFalsy();
    })
    it('should return true if value is undefined', () => {
      //Arrange
      const value = 'something';
      //ACt
      const result = isValueNotNullOrUndefined(value);
      //ASsert
      expect(result).toBeTruthy();
    })
  })

  describe("isValidIban specs", () => {
    it("should return true when iban is valid", () => {
      // Arrange
      const iban = "ES91 2100 0418 4502 0005 1332";
      // Act
      const result = isValidIban(iban);
      // Assert
      expect(result).toBeTruthy();
    });
    it("should return true when iban is formatted with dashes is valid", () => {
      // Arrange
      const iban = "ES91-2100-0418-4502-0005-1332";
      // Act
      const result = isValidIban(iban);
      // Assert
      expect(result).toBeTruthy();
    });
    it("should return true when iban is formatted with no spaces is valid", () => {
      // Arrange
      const iban = "ES9121000418450200051332";
      // Act
      const result = isValidIban(iban);
      // Assert
      expect(result).toBeTruthy();
    });
    it("should return false when iban is invalid", () => {
      // Arrange
      const iban = "ES91 2100 0418 4502 0005 1333";
      // Act
      const result = isValidIban(iban);
      // Assert
      expect(result).toBeFalsy();
    });
    it("should return false when iban is empty", () => {
      // Arrange
      const iban = "";
      // Act
      const result = isValidIban(iban);
      // Assert
      expect(result).toBeFalsy();
    });
  });
});
  