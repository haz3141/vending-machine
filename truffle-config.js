require('dotenv').config();
// console.log(process.env); // remove this after you've confirmed it is working

const HDWalletProvider = require('@truffle/hdwallet-provider');

const private_keys = [
  process.env.PRIVATE_KEY_0,
  process.env.PRIVATE_KEY_1,
];

module.exports = {
  networks: {
    development: {
     host: "127.0.0.1",
     port: 8545,
     network_id: "*"
    },
    sepolia: {
      provider: () => new HDWalletProvider({
        privateKeys: private_keys,
        providerOrUrl: 'https://sepolia.infura.io/v3/26bfc100336e49fc8466a630f9a06b02'
      }),
      network_id: 11155111,
      gas: 4465030,
      confirmations: 2, // # of confirmations to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },
    dashboard: {
    }
  },
  compilers: {
    solc: {
      version: "0.8.11",
    }
  },
  db: {
    enabled: false,
    host: "127.0.0.1",
  }
};
