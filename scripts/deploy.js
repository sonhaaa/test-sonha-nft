const { ethers } = require('hardhat')

async function main() {
  const Sonhaaa = await ethers.getContractFactory("Sonhaaa")
  const sonhaaa = await Sonhaaa.deploy("SONHAAA", "SONHA")

  await sonhaaa.deployed()

  console.log("Successfully deployed to: ", sonhaaa.address)

  await sonhaaa.mint("https://ipfs.io/ipfs/QmcTUPxk3xZaTgPGHLeaEu8aGL4LQk8mMetSJD9zBNEe6P")

  console.log("NFT successfully minted")
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
