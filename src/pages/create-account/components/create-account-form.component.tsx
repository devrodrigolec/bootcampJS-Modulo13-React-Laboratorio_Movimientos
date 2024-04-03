import React from "react";
import {
  Account,
  AccountError,
  createEmptyAccount,
  createEmptyAccountError,
} from "../create-account.vm";
import { validateCreateAccountForm } from "../validations/create-account-form.validation";
import classes from "./create-account-form.module.css";

export const CreateAccountFormComponent: React.FC = () => {
  const [dataForm, setDataForm] = React.useState<Account>(createEmptyAccount);

  const [errors, setErrors] = React.useState<AccountError>(
    createEmptyAccountError()
  );

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = validateCreateAccountForm(dataForm);
    setErrors(errors.errors);
    if (errors.succeeded) {
      console.log({ dataForm });
      alert("Cuenta creada con éxito");
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.formContainer}>
        <div>
          <label>Tipo de cuenta: </label>
          <select name="type" onChange={handleChange}>
            <option selected disabled>
              Seleccionar
            </option>
            <option value="1">Cuenta Corriente</option>
            <option value="2">Cuenta de Ahorro</option>
            <option value="3">Cuenta de Nómina</option>
          </select>
          <span className={classes.error}>{errors.type}</span>
        </div>
        <div>
          <label id="alias">Alias: </label>
          <input type="text" name="name" id="alias" onChange={handleChange} />
          <span className={classes.error}>{errors.name}</span>
        </div>
      </div>
        <button>GUARDAR</button>
    </form>
  );
};
