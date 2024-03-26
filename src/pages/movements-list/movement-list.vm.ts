export interface ViewModelMovementList {
  id: string;
  description: string;
  amount: string;
  balance: string;
  transaction: Date;
  realTransaction: Date;
  accountId: string;
}

export const createEmptyMovementsList = (): ViewModelMovementList[] => [
  {
    accountId: "",
    amount: "",
    balance: "",
    description: "",
    id: "",
    realTransaction: new Date(""),
    transaction: new Date(""),
  },
];
