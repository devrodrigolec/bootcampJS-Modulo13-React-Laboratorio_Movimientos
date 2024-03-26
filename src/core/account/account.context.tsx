import { AccountVm, createEmptyAccountVm } from "./account.context-model";
import React from "react";

export interface Context {
  account: AccountVm;
  setAccount: (account: AccountVm) => void;
}

const noAccountContext = createEmptyAccountVm();

const AccountContext = React.createContext<Context>({
  account: noAccountContext,
  setAccount: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const AccountProvider: React.FC<Props> = (props) => {
  const { children } = props;

  const [account, setAccount] = React.useState<AccountVm>(
    createEmptyAccountVm()
  );

  return (
    <AccountContext.Provider
      value={{ account: account, setAccount: setAccount }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export const useAccountContext = () => React.useContext(AccountContext);
