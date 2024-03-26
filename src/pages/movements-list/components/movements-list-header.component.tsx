import React from "react";
import classes from "./movements-list-header.component.module.css";
import { useAccountContext } from "@/core/account/account.context";

export const MovementListHeaderComponent: React.FC = () => {
  const { account } = useAccountContext();

  return (
    <header className={classes.header}>
      <h1>Saldos y Últimos movimientos</h1>
      <div>
        <p className={classes.saldoDisponible}>SALDO DISPONIBLE</p>
        <p className={classes.balance}>{account.balance} €</p>
      </div>
    </header>
  );
};
