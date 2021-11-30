import fs from "fs";
import { Parser } from "json2csv";
import { Asset, AssetOutput } from "./asset.interface";
import { AssetEvent, SalesData } from "./event.interface";

const json2csvParser = new Parser();

export function parseSaleData(assetEvent: AssetEvent): SalesData {
  let is_bundle = false;

  const {
    asset,
    asset_bundle,
    seller,
    winner_account,
    transaction,
    payment_token,
    total_price,
  } = assetEvent;

  let token_id: number | number[] | "N/A" = "N/A";

  if (asset) {
    token_id = asset.token_id;
  } else if (asset_bundle) {
    is_bundle = true;
    token_id = asset_bundle.assets.map((asset) => asset.token_id);
  }

  const seller_address = seller.address;
  const buyer_address = winner_account["address"];

  const seller_username = seller?.user?.username ?? "N/A";

  const buyer_username = winner_account?.user?.username ?? "N/A";

  const timestamp = transaction?.timestamp;
  const payment_token_symbol = payment_token?.symbol ?? "N/A";
  const usd_price = Number(payment_token?.usd_price) ?? "N/A";
  const transaction_hash = transaction?.transaction_hash;

  const result = {
    is_bundle: is_bundle,
    token_id,
    seller_address: seller_address,
    buyer_address: buyer_address,
    buyer_username: buyer_username,
    seller_username: seller_username,
    timestamp: timestamp,
    total_price: Number(total_price),
    payment_token: payment_token_symbol,
    usd_price: usd_price,
    transaction_hash: transaction_hash,
  };

  return result;
}

export function parseAsset(asset: Asset): AssetOutput {
  const { token_id, creator, owner, traits, num_sales } = asset;

  const creator_username = creator?.user?.username ?? "N/A";
  const creator_address = creator?.address ?? "N/A";
  const owner_username = owner?.user?.username ?? "N/A";
  const owner_address = owner["address"];

  const result = {
    token_id,
    creator_username,
    creator_address,
    owner_username,
    owner_address,
    traits,
    num_sales: Number(num_sales),
  };

  return result;
}

export function writeDataAsCSV(data: SalesData[] | AssetOutput[]) {
  const csvData = json2csvParser.parse(data);
  fs.writeFile("assets.csv", csvData, "utf8", function (err) {
    if (err) {
      console.log(
        "Some error occured - file either not saved or corrupted file saved."
      );
    } else {
      console.log("It's saved!");
    }
  });
}
