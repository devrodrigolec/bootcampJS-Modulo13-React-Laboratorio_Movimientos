import React from "react";
import {
  AccountVm,
  TransferError,
  TransferVm,
  createEmptyTransferError,
  createEmptyTransferVm,
} from "../transfer.vm";
import { validateForm } from "../validations";
import classes from "./transfer-form.component.module.css";

interface Props {
  accountList: AccountVm[];
  onTransfer: (transferInfo: TransferVm) => void;
  defaultAccountId: string;
}

export const TransferFormComponent: React.FC<Props> = (props) => {
  const { accountList, onTransfer, defaultAccountId } = props;

  const [transfer, setTransfer] = React.useState<TransferVm>(
    createEmptyTransferVm()
  );

  const [errors, setErrors] = React.useState<TransferError>(
    createEmptyTransferError()
  );

  React.useEffect(() => {
    setTransfer({...transfer, accountId: defaultAccountId})
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formValidationResult = validateForm(transfer);
    setErrors(formValidationResult.errors);
    if (formValidationResult.succeeded) {
      onTransfer(transfer);
     
    }
  };

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTransfer({
      ...transfer,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          <div>
            <label>Seleccione cuenta origen: </label>
            <select
              className={classes.large}
              name="accountId"
              onChange={handleFieldChange}
              value={transfer.accountId}
            >
              {accountList.map((account) => {
                return (
                  <option key={account.id} value={account.id}>
                    {account.alias}
                  </option>
                );
              })}
              <option value="">Seleccione una cuenta</option>
            </select>
            <p className={classes.error}>{errors.accountId}</p>
          </div>
          <div>
            <label>Ingrese el IBAN de destino: </label>
            <input className={classes.large} onChange={handleFieldChange} name="iban" type="text" />
            <p className={classes.error}>{errors.iban}</p>
          </div>
          <div>
            <label>Beneficiario: </label>
            <input className={classes.large} type="text" name="name" onChange={handleFieldChange} />
            <p className={classes.error}>{errors.name}</p>
          </div>
          <div>
            <label>Importe: </label>
            <input className={classes.small} type="number" name="amount" onChange={handleFieldChange} />
            <p className={classes.error}>{errors.amount}</p>
          </div>
          <div>
            <label>Concepto: </label>
            <input className={classes.large} type="text" name="concept" onChange={handleFieldChange} />
            <p className={classes.error}>{errors.concept}</p>
          </div>
          <div>
            <label>Observaciones: </label>
            <input className={classes.large} type="text" name="notes" onChange={handleFieldChange} />
            <p className={classes.error}>{errors.notes}</p>
          </div>
        </div>
        <div className={classes.formContainer}>
          <div>
            <p>
              Para que la trasnferencia de realice en una fecha diferente a la
              de hoy, por favor, indiquenos la fecha de ejecución:
            </p>
            <label>Fecha de ejecución: </label>
            <input
              type="date"
              name="realDateTransfer"
              onChange={handleFieldChange}
            />
            <p className={classes.error}>{errors.realDateTransfer}</p>
          </div>
        </div>
        <div className={classes.formContainer}>
          <div>
            <p>
              Escriba una dirección de email para dar aviso al beneficiario:
            </p>
            <label>Email del beneficiario: </label>
            <input className={classes.large} type="text" name="email" onChange={handleFieldChange} />
            <p className={classes.error}>{errors.email}</p>
          </div>
        </div>
        <button className={classes.button} type="submit">Realizar la transferencia</button>
      </form>
    </div>
  );
};
