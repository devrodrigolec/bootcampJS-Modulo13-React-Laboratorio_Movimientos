import { AppLayout } from "@/layout";
import React from "react";
import {
  AccountDataComponent,
  MovementListHeaderComponent,
  MovementListTableComponent,
} from "./components";

import {
  ViewModelMovementList,
  createEmptyMovementsList,
} from "./movement-list.vm";
import classes from "./movements-list.module.css";
import { useAccountContext } from "@/core/account/account.context";
import { getMovementListFromApi } from "./api";
import { mapApiModelToViewModelMovementList } from "./movement-list.mapper";

export const MovementListPage: React.FC = () => {
  const [movements, setMovements] = React.useState<ViewModelMovementList[]>(
    createEmptyMovementsList()
  );
  const { account } = useAccountContext();

  React.useEffect(() => {
    getMovementListFromApi(account.id).then((resp) =>
      setMovements(mapApiModelToViewModelMovementList(resp))
    );
  }, []);

  return (
    <AppLayout>
      <div className={classes.root}>
        <MovementListHeaderComponent />
        <AccountDataComponent />
        <MovementListTableComponent movementsList={movements} />
      </div>
    </AppLayout>
  );
};
