# SuperCall Contract
A project for cross chain communication contract. It offers multicall functionality for interacting with many chains in one transaction.

## Setup
1. Copy `.env.example` to `.env`
```bash
cp .env.example .env
```
2. Fill in `PRIVATE_KEY` value in `.env` file
3. Install dependencies
```bash
npm i
```
4. Compile contracts
```bash
npm run compile
```
5. Deploy an LzSuperCall contract
```bash
npx hardhat run script/deployLzSuperCall.ts --network <network>
```
6. Deploy a Logger contract
```bash
npx hardhat run script/deployLogger.ts --network <network>
```
7. Send cross chain transaction
```bash
npx hardhat run script/callLogger.ts --network <network>
```

## Examples
1. Deploy supercall
npx hardhat run scripts/deployLzSuperCall.ts --network fuji 
npx hardhat run scripts/deployLzSuperCall.ts --network fantom-testnet
2. Set trusted remote
npx hardhat run scripts/setTrustedRemote.ts --network fuji 
npx hardhat run scripts/setTrustedRemote.ts --network fantom-testnet
3. Call logger from on chain to another chain
npx hardhat run scripts/callLogger.ts --network fuji 
4. Check log value on the destination chain
px hardhat run scripts/getLogValue.ts --network fantom-testnet