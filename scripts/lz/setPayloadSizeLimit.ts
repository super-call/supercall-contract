import { ethers, network } from "hardhat";
import addressUtils from "../../utils/addressUtils";
import { LzSuperCall__factory } from "../../typechain-types";

const chainIds = require("../../constants/chainIds.json");

async function main() {
  const [signer] = await ethers.getSigners();
  const addressList = await addressUtils.getAddressList(network.name);

  const lzSuperCall = LzSuperCall__factory.connect(
    addressList["LzSuperCall"],
    signer
  );

  // Inputs
  const destChains = ["fantom-testnet", "bsc-testnet", "mumbai"];

  for (let destChain of destChains) {
    const destChainId = chainIds[destChain];
    const size = 1000000;
    const tx = await lzSuperCall.setPayloadSizeLimit(destChainId, size);

    const receipt = await tx.wait();
    console.log("Tx mined: ", receipt?.hash);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
