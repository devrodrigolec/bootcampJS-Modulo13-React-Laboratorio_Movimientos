import axios from "axios";
import { ApiModelMovementsList } from "./movements-list.api-model";

const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`

export const getMovementListFromApi = (
  accountId: string
): Promise<ApiModelMovementsList[]> =>
  axios
    .get(`${urlMovements}?accountId=${accountId}`)
    .then((response) => response.data);
