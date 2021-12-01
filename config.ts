export const LIMIT_PER_CALL = 2; // 50
export const MAX_ASSET_LOOPS = 4; // 400
export const SALES_LOOPS = 100;

export const baseURL = "https://api.opensea.io/api/v1";
export const timeout = 20000; // this is api timeout

export const ASSET_FIELDS = [
  "token_id",
  "creator_username",
  "creator_address",
  "owner_username",
  "owner_address",
  "traits",
  "num_sales",
];

export const SALES_FIELDS = [
  "id",
  "transaction",
  "asset",
  "asset_bundle",
  "winner_account",
  "seller",
  "event_type",
  "total_price",
  "payment_token",
];
