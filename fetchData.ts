import axios from "axios";
import qs from "qs";

import { baseURL, LIMIT_PER_CALL, timeout } from "./config";

const openseaAsset = axios.create({
  baseURL,
  timeout,
  headers: { "Content-Type": "Application/json", Accept: "application/json" },
  responseType: "json",
});

export async function getAsset(asset_contract_address: string, start: number) {
  const token_ids = Array.from(
    { length: LIMIT_PER_CALL },
    (_, i) => start * LIMIT_PER_CALL + i
  );
  const query = {
    params: {
      token_ids,
      format: "json",
      asset_contract_address,
      order_direction: "desc",
      offset: 0,
      limit: LIMIT_PER_CALL,
    },
    paramsSerializer: (params: any) => {
      return qs.stringify(params, { arrayFormat: "repeat" });
    },
  };
  return openseaAsset.get("/assets", query);
}

export async function getAssetSales(
  asset_contract_address: string,
  start: number
) {
  const query = {
    params: {
      asset_contract_address,
      event_type: "successful",
      only_opensea: "true",
      offset: start * LIMIT_PER_CALL,
      limit: LIMIT_PER_CALL,
    },
    paramsSerializer: (params: any) => {
      return qs.stringify(params, { arrayFormat: "repeat" });
    },
  };
  return openseaAsset.get("/events", query);
}
