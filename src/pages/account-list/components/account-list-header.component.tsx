import React from "react";
import classes from "../account-list.page.module.css";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";

export const AccountListHeader: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(appRoutes.createAccount);
  };

  return (
    <div className={classes.headerContainer}>
      <h1>Mis cuentas</h1>
      <button onClick={handleButtonClick}>AGREGAR NUEVA CUENTA</button>
    </div>
  );
};
