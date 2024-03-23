import { AppLayout } from "@/layout";
import React from "react";
import classes from "./account-list.page.module.css";
import { AccountVm } from "./account-list.vm";
import { AccountListHeader, AccountListTableComponent } from "./components";
import { getAccountList } from "./api";
import { mapAccountListFromApiToVm } from "./account-list.mapper";

export const AccountListPage: React.FC = () => {
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);

  React.useEffect(() => {
    getAccountList().then((response) =>
      setAccountList(mapAccountListFromApiToVm(response))
    );
  }, []);

  return (
    <AppLayout>
      <div className={classes.root}>
        <AccountListHeader />
        <AccountListTableComponent accountList={accountList} />
      </div>
    </AppLayout>
  );
};
