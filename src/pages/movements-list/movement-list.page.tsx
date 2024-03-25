import { AppLayout } from "@/layout";
import React from "react";
import { MovementListHeaderComponent } from "./components";
import { mockMovimientos } from "./mockMovimientos";
import { mapApiModelToViewModelMovementList } from './movement-list.mapper';
import { ViewModelMovementList } from "./movement-list.vm";


export const MovementListPage: React.FC = () => {

  const movementsList = mapApiModelToViewModelMovementList(mockMovimientos);

  const findLastMovementByDate = (movementsList : ViewModelMovementList[]) => {
    const movementsSortedByDate = movementsList.toSorted((a : ViewModelMovementList,b: ViewModelMovementList) => a.transaction.getTime() - b.transaction.getTime())
    return movementsSortedByDate[0];
  }

  const lastMovement = findLastMovementByDate(movementsList);

  console.log(lastMovement.balance)

  return (
    <AppLayout>
      <MovementListHeaderComponent balance ={'hola'}/>
    </AppLayout>
  );
};
