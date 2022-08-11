import sdk from "./1-initialize-sdk.js";
import { MaxUint256 } from "@ethersproject/constants";

const editionDrop = sdk.getEditionDrop("0x0Ffa0BD3eDaB5818f582B2f51EC4AeC5bf9dc579");

(async () => {
  try {
    const claimConditions = [{
      // kapan orang2 bisa claim NFT (now)
      startTime: new Date(),
      // Maks jumlah NFT yang bisa diklaim
      maxQuantity: 50_000,
      // Harga NFT (gratis)
      price: 0,
      // The amount of NFTs people can claim in one trx
      quantityLimitPerTransaction: 1,
      // We set the wait between thransaction to MaxUint256, 
      // which mean people are only allowed to claim once.
      waitInSeconds: MaxUint256,
    }];

    await editionDrop.claimConditions.set("0", claimConditions);
    console.log("✅ Successfully set claim condition!");
  } catch (error) {
    console.error("Ada error bang:", error);
  }
})();