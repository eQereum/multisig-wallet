require('hardhat-contract-sizer');
require('hardhat-gas-reporter');

require('dotenv').config();
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-etherscan');
// require('@openzeppelin/hardhat-upgrades');

const MNEMONIC = process.env.MNEMONIC;
const ETHERSCAN_TEST_API_KEY = process.env.ETHERSCAN_TEST_API_KEY;
const BSCSCAN_TEST_API_KEY = process.env.BSCSCAN_TEST_API_KEY;
const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID;
const ALCHEMY_API_ID = process.env.ALCHEMY_API_ID;

// ALCHEMY ENDPOINTS
const MAINNET_ENDPOINT_ALCHEMY = `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_ID}`;
const KOVAN_ENDPOINT_ALCHEMY = `https://eth-kovan.alchemyapi.io/v2/${ALCHEMY_API_ID}`;
const RINKEBY_ENDPOINT_ALCHEMY = `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_ID}`;
const ROPSTEN_ENDPOINT_ALCHEMY = `https://eth-ropsten.alchemyapi.io/v2//${ALCHEMY_API_ID}`;
const GOERLI_ENDPOINT_ALCHEMY = `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_ID}`;

// INFURA ENDPOINTS
const MAINNET_ENDPOINT_INFURA = `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`;
const KOVAN_ENDPOINT_INFURA = `https://kovan.infura.io/v3/${INFURA_PROJECT_ID}`;
const RINKEBY_ENDPOINT_INFURA = `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`;
const ROPSTEN_ENDPOINT_INFURA = `https://ropsten.infura.io/v3/${INFURA_PROJECT_ID}`;
const GOERLI_ENDPOINT_INFURA = `https://goerli.infura.io/v3/${INFURA_PROJECT_ID}`;

const settings = {
  optimizer: {
    enabled: true,
    runs: 200,
  },
};

module.exports = {
  solidity: {
    compilers: [{ version: '0.8.13' }, { version: '0.8.0' }, { version: '0.5.16' }, { version: '0.6.12' }, { version: '0.4.24' }, { version: '0.4.18' }].map((opt) => ({ ...opt, settings })),
  },

  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      forking: {
        url: MAINNET_ENDPOINT_ALCHEMY,
        blockNumber: 4043801,
      },
    },
    mainnet: {
      url: MAINNET_ENDPOINT_ALCHEMY,
      accounts: { mnemonic: MNEMONIC },
      // accounts: [privateKey1, privateKey2, ...]
    },
    kovan: {
      url: KOVAN_ENDPOINT_ALCHEMY,
      accounts: { mnemonic: MNEMONIC },
      // accounts: [privateKey1, privateKey2, ...]
    },
    rinkeby: {
      url: RINKEBY_ENDPOINT_ALCHEMY,
      accounts: { mnemonic: MNEMONIC },
      // accounts: [privateKey1, privateKey2, ...]
    },
    ropsten: {
      url: ROPSTEN_ENDPOINT_ALCHEMY,
      accounts: { mnemonic: MNEMONIC },
      // accounts: [privateKey1, privateKey2, ...]
    },
    goerli: {
      url: GOERLI_ENDPOINT_ALCHEMY,
      accounts: { mnemonic: MNEMONIC },
      // accounts: [privateKey1, privateKey2, ...]
    },
    bscTestnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      chainId: 97,
      gasPrice: 20000000000,
      accounts: { mnemonic: MNEMONIC },
    },
    bscMainnet: {
      url: 'https://bsc-dataseed.binance.org/',
      chainId: 56,
      gasPrice: 20000000000,
      accounts: { mnemonic: MNEMONIC },
    },
    maticMumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      accounts: { mnemonic: MNEMONIC },
    },
    fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      chainId: 43113,
      accounts: { mnemonic: MNEMONIC },
    },
    avaxCChain: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      chainId: 43114,
      accounts: { mnemonic: MNEMONIC },
    },
    fantomTestnet: {
      url: 'https://rpc.testnet.fantom.network',
      chainId: 4002,
      accounts: { mnemonic: MNEMONIC },
    },
    fantomOpera: {
      url: 'https://rpcapi.fantom.network',
      chainId: 250,
      accounts: { mnemonic: MNEMONIC },
    },
  },
  etherscan: {
    apiKey: {
      kovan: `${ETHERSCAN_TEST_API_KEY}`,
      rinkeby: `${ETHERSCAN_TEST_API_KEY}`,
      ropsten: `${ETHERSCAN_TEST_API_KEY}`,
      goerli: `${ETHERSCAN_TEST_API_KEY}`,
      bscTestnet: `${BSCSCAN_TEST_API_KEY}`,
    },
  },
  contractSizer: {
    alphaSort: false,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
    // only: [":ERC20$"],
  },
  gasReporter: {
    currency: 'USD',
    // gasPrice: 21,
  },
  mocha: {
    reporter: 'hardhat-gas-reporter',
    reporterOptions: {
      showTimeSpent: true,
    },
  },
};
