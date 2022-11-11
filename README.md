# Simple Disbursement Contract

This projects aims to provide a simple and secure way of distributing tokens following a linear distribution through a Smart Contract that hold those tokens.

## Configuration
Please update content in ./deploy-params.js

* **receiver**: ethereum address that will receive the tokens (note that you need to use that address to call the disbursement contract)
* **wallet**: ethereum address with powers for withdrawing unclaimed tokens from the contract
* **disbursementPeriod**: duration of the lineart distribution in seconds
* **startDate**: cliff for the disbursement, epoch time (in seconds)
* **token**: ethereum address for the ERC20 token contract

## Frameworks

  - `master`: truffle
  
  - `hardhat`: hardhat 

## Installation
```bash
npm i
```

or (recommended)

```bash
yarn
```

## Run

```bash
npx truffle migrate
```

For more params (different networks) check in the truffle docs: https://www.trufflesuite.com/docs/truffle/reference/truffle-commands#migrate

## Verify Contract

```bash
npx truffle run verify Disbursement@ContractAddress --network $Network
```
