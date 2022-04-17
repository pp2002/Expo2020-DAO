import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x7Cb6fA94F50037B18ddff12b34F6F3Ea130FC917");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Expo2020 Pass",
        description: "This NFT will give you access to Expo2020 DAO!",
        image: readFileSync("scripts/assets/Expo_2020_NFT.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();