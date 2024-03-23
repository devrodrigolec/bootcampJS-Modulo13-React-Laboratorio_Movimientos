import React from "react";
import {
  CredentialFormErrors,
  Credentials,
  createEmptyCredentials,
  createEmptyCredentialsFormErrors,
} from "../login.vm";
import { validateForm } from "../login.validation";
import classes from "./login-form.component.module.css";

interface Props {
  onLogin: (credentials: Credentials) => void;
}

export const LoginFormComponent: React.FC<Props> = (props) => {
  const { onLogin } = props;
  const [credentials, setCredentials] = React.useState<Credentials>(
    createEmptyCredentials()
  );

  const [errors, setErrors] = React.useState<CredentialFormErrors>(
    createEmptyCredentialsFormErrors()
  );

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationResult = validateForm(credentials);
    setErrors(validationResult.errors);
    if (validationResult.succeeded) {
      onLogin(credentials);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div>
          <input
            type="text"
            id="username"
            name="user"
            placeholder="Usuario"
            onChange={handleFieldChange}
            className={errors.user ? classes.inputError : ""}
          />
          {errors.user && <p className={classes.error}>{errors.user}</p>}
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Clave"
            onChange={handleFieldChange}
            className={errors.password ? classes.inputError : ""} 
          />
          {errors.password && (
            <p className={classes.error}>{errors.password}</p>
          )}
        </div>
        <button className={classes.btnEnviar} type="submit">Acceder</button>
      </form>
    </>
  );
};
