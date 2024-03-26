import React from "react";
import { Router } from "./core/router";

import "./style.css";
import { ProfileProvider } from "./core/profile";
import { AccountProvider } from "./core/account/account.context";

export const App: React.FC = () => {
  return (
    <ProfileProvider>
      <AccountProvider>
        <Router />
      </AccountProvider>
    </ProfileProvider>
  );
};
