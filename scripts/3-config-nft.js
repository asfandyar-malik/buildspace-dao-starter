import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x4F2c5B885D2CE654e84705AE71dFb64aC1608c1e",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Ronaldo-Messi",
        description: "Greatest of all time!",
        image: readFileSync("scripts/assets/NFT1.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()