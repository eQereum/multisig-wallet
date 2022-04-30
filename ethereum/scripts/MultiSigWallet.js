// or
const { ethers } = require('hardhat');
const path = require('path');
const fs = require('fs-extra');

// ----------------------------------------------------- config -----------------------------------------------------
const contractName = 'MultiSigWallet';
const networkName = 'rinkeby';
const pathSource = `./artifacts/contracts/MultiSigWallet.sol/MultiSigWallet.json`;
const buildPath = path.resolve(__dirname, '../../client/src/contracts');
// `npx hardhat run scripts/NFT.js --network ${networkName}`;
// ------------------------------------------------------------------------------------------------------------------

const main = async () => {
  const [owner1, owner2, owner3] = await ethers.getSigners();

  const contractFactory = await ethers.getContractFactory(contractName);
  const contract = await contractFactory.deploy([owner1.address, owner2.address, owner3.address], 3, 5000);

  const contractAddress = JSON.parse(JSON.stringify(contract.address));
  const owner = JSON.parse(JSON.stringify(contract.deployTransaction.from));
  const networkId = JSON.parse(JSON.stringify(contract.deployTransaction.chainId));
  const deployTrancationHash = JSON.parse(JSON.stringify(contract.deployTransaction.hash));

  console.log(contractAddress);

  makeOutputSummary(pathSource, contractAddress, owner, networkId, deployTrancationHash);
};

const makeOutputSummary = (pathSource, contractAddress, owner, networkId, deployTrancationHash) => {
  let readableSource = fs.readFileSync(pathSource, 'utf8');
  readableSource = JSON.parse(readableSource);

  // fs.removeSync(buildPath);
  fs.ensureDirSync(buildPath);

  var input = {
    language: 'Solidity',
    contractName: readableSource.contractName,
    contractAddress: contractAddress,
    onwer: owner,
    networkId: networkId,
    networkName: networkName,
    deployTrancationHash: deployTrancationHash,
    abi: readableSource.abi,
    bytecode: readableSource.bytecode,
    sourcePath: readableSource.sourceName,
    settings: {
      optimizer: {
        enabled: true,
      },
      outputSelection: {
        '*': {
          '*': ['*'],
        },
      },
    },
  };

  let output = JSON.parse(JSON.stringify(input));
  const jsonOutput = fs.outputJsonSync(path.resolve(buildPath, `${output.contractName}-${networkName}.json`), output);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
