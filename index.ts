import { ASSET_FIELDS, MAX_ASSET_LOOPS, SALES_FIELDS } from "./config";
import { CSVWriter } from "./csv-writer";
import { getAsset, getAssetSales } from "./fetchData";
import { parseAsset } from "./util";

async function fetchAllAssets(
  writer: CSVWriter,
  assetId: string,
  apiCallIndex = 1
) {
  try {
    const response = await getAsset(assetId, apiCallIndex);
    const assets = response.data.assets.map(parseAsset);

    writer.write(assets);
  } catch (err) {
    console.error(err);
  } finally {
    if (apiCallIndex < MAX_ASSET_LOOPS) {
      fetchAllAssets(writer, assetId, apiCallIndex + 1);
    } else {
      writer.end();
    }
  }
}

async function fetchAllSales(
  writer: CSVWriter,
  assetId: string,
  apiCallIndex = 1
) {
  console.log(apiCallIndex);
  try {
    const response = await getAssetSales(assetId, apiCallIndex);
    const assets = response.data.assets.map(parseAsset);

    writer.write(assets);
  } catch (err) {
    console.error(err);
  } finally {
    if (apiCallIndex < MAX_ASSET_LOOPS) {
      fetchAllAssets(writer, assetId, apiCallIndex + 1);
    } else {
      writer.end();
    }
  }
}

fetchAllAssets(
  new CSVWriter("assets", ASSET_FIELDS),
  "0x7Bd29408f11D2bFC23c34f18275bBf23bB716Bc7"
);

// fetchAllAssets(
//   new CSVWriter("sales", SALES_FIELDS),
//   "0x7Bd29408f11D2bFC23c34f18275bBf23bB716Bc7"
// );

// getAssetSales("0x7Bd29408f11D2bFC23c34f18275bBf23bB716Bc7", 0).then((res) =>
//   console.log(res)
// );
