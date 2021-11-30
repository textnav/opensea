export interface Asset_contract {
  address: string;
  asset_contract_type: string;
  created_date: string;
  name: string;
  nft_version?: any;
  opensea_version: string;
  owner: number;
  schema_name: string;
  symbol: string;
  total_supply?: any;
  description: string;
  external_link?: any;
  image_url?: any;
  default_to_fiat: boolean;
  dev_buyer_fee_basis_points: number;
  dev_seller_fee_basis_points: number;
  only_proxied_transfers: boolean;
  opensea_buyer_fee_basis_points: number;
  opensea_seller_fee_basis_points: number;
  buyer_fee_basis_points: number;
  seller_fee_basis_points: number;
  payout_address?: any;
}

export interface Display_data {
  card_display_style: string;
}

export interface Collection {
  banner_image_url: string;
  chat_url?: any;
  created_date: string;
  default_to_fiat: boolean;
  description: string;
  dev_buyer_fee_basis_points: string;
  dev_seller_fee_basis_points: string;
  discord_url?: any;
  display_data: Display_data;
  external_url?: any;
  featured: boolean;
  featured_image_url: string;
  hidden: boolean;
  safelist_request_status: string;
  image_url: string;
  is_subject_to_whitelist: boolean;
  large_image_url: string;
  medium_username?: any;
  name: string;
  only_proxied_transfers: boolean;
  opensea_buyer_fee_basis_points: string;
  opensea_seller_fee_basis_points: string;
  payout_address: string;
  require_email: boolean;
  short_description?: any;
  slug: string;
  telegram_url?: any;
  twitter_username: string;
  instagram_username?: any;
  wiki_url?: any;
}

export interface User {
  username: string;
}

export interface Owner {
  user: User;
  profile_img_url: string;
  address: string;
  config: string;
}

export interface User {
  username: string;
}

export interface Creator {
  user: User;
  profile_img_url: string;
  address: string;
  config: string;
}

export interface Asset {
  id: number;
  token_id: string;
  num_sales: number;
  background_color?: any;
  image_url: string;
  image_preview_url: string;
  image_thumbnail_url: string;
  image_original_url?: any;
  animation_url?: any;
  animation_original_url?: any;
  name: string;
  description?: any;
  external_link?: any;
  asset_contract: Asset_contract;
  permalink: string;
  collection: Collection;
  decimals?: any;
  token_metadata?: any;
  owner: Owner;
  sell_orders?: any;
  creator: Creator;
  traits: any[];
  last_sale?: any;
  top_bid?: any;
  listing_date?: any;
  is_presale: boolean;
  transfer_fee_payment_token?: any;
  transfer_fee?: any;
}

export interface AssetOutput {
  token_id: string;
  creator_username: string;
  creator_address: string;
  owner_username: string;
  owner_address: string;
  traits: any[];
  num_sales: number;
}
