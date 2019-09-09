const Disbursement = artifacts.require('Disbursement.sol')
const {token} = require("../deploy-params.js")
const {isAddress} = require("web3-utils")


module.exports = async deployer => {
  if (!isAddress(token)){
    throw Error(`Token should be a valid ethereum address. Got ${token}`)
  }
  const instance = await Disbursement.deployed()
  await instance.setup(token)
}

