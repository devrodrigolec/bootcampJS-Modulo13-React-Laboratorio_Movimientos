import React from "react";
import { Credentials } from "./login.vm";
import { LoginFormComponent } from "./components/login-form.component";
import { useNavigate } from "react-router-dom";
import { mapCredentialsFromVMToApi } from "./login.mapper";
import { isValidLogin } from "./api";
import { appRoutes } from "@/core/router";
import classes from "./login.page.module.css";
import { useProfileContext } from "@/core/profile";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const {setUserName} = useProfileContext()

  const handleSubmit = (credentials: Credentials) => {
    const apiCredentials = mapCredentialsFromVMToApi(credentials);

    isValidLogin(apiCredentials).then((isValid) => {
      if (isValid) {
        setUserName(credentials.user)
        navigate(appRoutes.acoountList);
      } else {
        alert("Usuario o clave no correctas");
      }
    });
  };

  return (
    <>
      <header className={classes.header}>
        <img className={classes.logo} src="assets/logo_header.svg" alt="Logo" />
      </header>
      <div className={classes.bgImg}></div>
      <div className={classes.box}>
        <h1>Acceso</h1>
        <LoginFormComponent  onLogin={handleSubmit} />
        <h4 className={classes.inputFooter}>Está usted en un <strong>sitio seguro</strong></h4>
      </div>
    </>
  );
};
