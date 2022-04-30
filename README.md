# Multi Signature Wallet with Hardhat/Ethers

### Clone the Repository

```solidity
git clone --recursive https://github.com/eQereum/mutltisig-wallet.git your-directory
```

### Install Packages

```solidity
cd your-directory/ethereum
npm install
```

### Compile

compile first to create json artifacts in `artifacts` folder

```solidity
npx hardhat compile
```

### Test

```solidity
npx hardhat test test/MultiSigWallet.test.js
```
this command will run test scripts on default network which is set `hardhat.config.js`.
### Deploy

For this step you first need to fill `.env` file with your api keys (`Alchemy`, ...)

You can deploy both contracts in any network you want (make sure `hardhat.config.js` contains that network)

**Note:** You can change `buildPath` of output json file containing abi, bytecode, ... .

```solidity
npx hardhat run scripts/MultiSigWallet.js --network maticMumbai
```

After a while, you would see contract address in console.


## Give a Star! :star:

If you like or use this project, please give it a star. Thanks !!!