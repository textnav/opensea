export interface Transaction {
  transaction_hash: string;
  block_number: string;
  block_hash: string;
  timestamp: string;
}

export interface Asset {
  token_id: number;
}

export interface asset_bundle {
  assets: Asset[];
}

export interface payment_token {
  symbol: string;
  usd_price: string;
}

export interface AssetEvent {
  id: number;
  transaction: Transaction;
  asset?: Asset;
  asset_bundle?: asset_bundle;
  winner_account?: any;
  seller?: any;
  event_type: string;
  total_price: string;
  payment_token: payment_token;
}

export interface SalesData {
  is_bundle: boolean;
  token_id: number | number[] | "N/A";
  seller_address: any;
  buyer_address: any;
  buyer_username: any;
  seller_username: any;
  timestamp: string;
  total_price: number;
  payment_token: string;
  usd_price: string | number;
  transaction_hash: string;
}
