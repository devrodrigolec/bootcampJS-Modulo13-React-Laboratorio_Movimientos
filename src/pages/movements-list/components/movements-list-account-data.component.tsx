import { useAccountContext } from "@/core/account/account.context";
import classes from "./movement-list-account-data.component.module.css";
import React from "react";

export const AccountDataComponent: React.FC = () => {
  const { account } = useAccountContext();

  return (
    <div className={classes.accountData}>
      <p>Alias: {account.name}</p>
      <p>IBAN: {account.iban}</p>
    </div>
  );
};
