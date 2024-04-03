import axios from "axios";
import { AccountApi } from "./create-account.api-model";

const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const postNewAccountApi = (data: AccountApi): Promise<AccountApi> =>
  axios.post<AccountApi>(url, data).then((resp) => resp.data);
