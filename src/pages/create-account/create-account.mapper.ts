import * as viewModel from "./create-account.vm";
import * as apiModel from "./api";

export const mapAccountVmtoAccountApiModel = (
  vm: viewModel.Account
): apiModel.AccountApi => {
  return {
    type: vm.type,
    name: vm.name,
  };
};
