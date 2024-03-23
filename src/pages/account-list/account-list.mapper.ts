import * as apiModel from "./api/account-list.api-model";
import * as viewModel from "./account-list.vm";

export const mapAccountListFromApiToVm = (
  accountList: apiModel.Account[]
): viewModel.AccountVm[] => {
  const AccountListVm = accountList.map((account) => {
    return {
      id: account.id,
      name: account.name,
      iban: account.iban,
      balance: account.balance.toString(),
      lastTransaction: new Date(account.lastTransaction),
    };
  });

  return AccountListVm;
};
