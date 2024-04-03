import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AccountListPage,
  AccountPage,
  CreateAccountPage,
  LoginPage,
  MovementListPage,
  TransferPage,
} from "@/pages";
import { appRoutes } from "./routes";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={appRoutes.root} element={<LoginPage />} />
        <Route path={appRoutes.acoountList} element={<AccountListPage />} />
        <Route path={appRoutes.editAccount} element={<AccountPage />} />
        <Route path={appRoutes.movements} element={<MovementListPage />} />
        <Route path={appRoutes.transfer} element={<TransferPage />} />
        <Route
          path={appRoutes.transferFromAccount}
          element={<TransferPage />}
        />
        <Route path={appRoutes.createAccount} element={<CreateAccountPage />} />
      </Routes>
    </BrowserRouter>
  );
};
