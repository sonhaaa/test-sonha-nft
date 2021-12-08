require("@nomiclabs/hardhat-waffle");

const privateKey = "6b78809572eeb9710fed4756d6b9af228672a33c4b80d3fab6d1244de70fdf97"

module.exports = {
  solidity: {
    version: "0.8.2",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  defaultNetwork: "matic",
  networks: {
    hardhat: {},
    matic: {
      url: "https://rpc-mumbai.maticvigil.com/",
      accounts: [privateKey]
    }
  }
};
