import { mapCredentialsFromVMToApi } from "./login.mapper";
import * as apiModel from "./api";
import * as viewModel from "./login.vm";

describe("login.mapper specs", () => {
  it("should return a credentials with the same properties", () => {
    //Arrange
    const vmCredentials: viewModel.Credentials = {
      user: "myuser",
      password: "mypassword",
    };
    const expectedCredentials : apiModel.Credentials = {
      user: "myuser",
      password: "mypassword",
    }
    //Act
    const result : apiModel.Credentials = mapCredentialsFromVMToApi(vmCredentials);
    //Assert
    expect(result).toEqual(expectedCredentials);
  });
});
