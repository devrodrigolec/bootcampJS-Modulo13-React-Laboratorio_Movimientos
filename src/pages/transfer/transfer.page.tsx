import { AppLayout } from "@/layout";
import React from "react";
import { AccountVm, TransferVm } from "./transfer.vm";
import { TransferFormComponent } from "./components";
import classes from "./transfer.page.module.css";
import { getAccountList, saveTransfer } from "./api";
import {
  mapAccountFromApiToVm,
  mapTransferFromVmtoApi,
} from "./transfer.mapper";
import { useParams } from "react-router-dom";

export const TransferPage: React.FC = () => {
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);

  const {id} = useParams<{id: string}>()

  React.useEffect(() => {
    getAccountList().then((accountListApi) => {
      const accountListVm = accountListApi.map(mapAccountFromApiToVm);
      setAccountList(accountListVm);
    });
  }, []);

  const handleTransfer = (transferInfo: TransferVm) => {
    const transfer = mapTransferFromVmtoApi(transferInfo);
    saveTransfer(transfer).then((result) => {
      if (result) {
        alert("Transferencia realizada con éxito");
      } else {
        alert("Error al realizar la transferencia");
      }
    });
  };

  return (
    <>
      <AppLayout>
        <div className={classes.container}>
          <h1 className={classes.title}>Transferencias Nacionales</h1>
          <TransferFormComponent
            accountList={accountList}
            onTransfer={handleTransfer}
            defaultAccountId = {id ?? ''}
          />
        </div>
      </AppLayout>
    </>
  );
};
