const Disbursement = artifacts.require('Disbursement.sol')
const {receiver, wallet, disbursementPeriod, startDate} = require("../deploy-params.js")
const {isAddress} = require("web3-utils")
const fourYears = 3600*24*365*4;
const currentEpochInSeconds = Math.floor(new Date() / 1000)

module.exports = async deployer => {
  // Validate params
  if (!receiver || !wallet || !disbursementPeriod || startDate == undefined){
    throw Error("Fill the deployment parameters in deploy-params.js. All are required.")
  }

  if (!isAddress(receiver)){
    throw Error(`receiver should be a valid ethereum address. Got ${receiver}`)
  }

  if (!isAddress(wallet)){
    throw Error(`wallet should be a valid ethereum address. Got ${wallet}`)
  }

  if (disbursementPeriod > fourYears){
    throw Error(`disbursement period should be in seconds and no longer than 4 years. Got ${disbursementPeriod}`)
  }

  if (startDate < currentEpochInSeconds && startDate != 0){
    throw Error(`startDate should be either 0 or higher than current time. Got ${startDate}`)
  }

  await deployer.deploy(Disbursement, receiver, wallet, disbursementPeriod, startDate)
}