import { ApiModelMovementsList } from "./api/index";
import { ViewModelMovementList } from "./movement-list.vm";

export const mapApiModelToViewModelMovementList = (
  movementsList: ApiModelMovementsList[]
): ViewModelMovementList[] => {
  return movementsList.map((movement) => {
    return {
      id: movement.id,
      description: movement.description,
      amount: movement.amount.toString(),
      balance: movement.balance.toString(),
      transaction: new Date(movement.transaction),
      realTransaction: new Date(movement.realTransaction),
      accountId: movement.accountId,
    };
  });
};
