import { validateForm } from "./login.validation";
import { Credentials } from "./login.vm";

describe("pages/login/login.validation.ts", () => {
  it("should return validation succeded when both fields are informed", () => {
    //Arrange
    const credentials: Credentials = {
      user: "myuser",
      password: "mypassword",
    };
    //Act
    const result = validateForm(credentials);
    //Assert

    expect(result.succeeded).toBeTruthy();
    expect(result.errors.user).toBe("");
    expect(result.errors.password).toBe("");
  });

  it('Should return validation fail when user is empty', () => {
    //Arrange
    const credentials: Credentials = {
      user: "",
      password: "mypassword",
    };
    //Act
    const result = validateForm(credentials);
    //Assert

    expect(result.succeeded).toBeFalsy();
    expect(result.errors.user).toBe("Debe informar el campo usuario");
    expect(result.errors.password).toBe("");
  })
  it('Should return validation fail when password is empty', () => {
    //Arrange
    const credentials: Credentials = {
      user: "myuser",
      password: "",
    };
    //Act
    const result = validateForm(credentials);
    //Assert

    expect(result.succeeded).toBeFalsy();
    expect(result.errors.user).toBe("");
    expect(result.errors.password).toBe("Debe informar el campo password");
  })
  it('Should return validation fail when both fields are empty', () => {
    //Arrange
    const credentials: Credentials = {
      user: "",
      password: "",
    };
    //Act
    const result = validateForm(credentials);
    //Assert

    expect(result.succeeded).toBeFalsy();
    expect(result.errors.user).toBe("Debe informar el campo usuario");
    expect(result.errors.password).toBe("Debe informar el campo password");
  })
});
