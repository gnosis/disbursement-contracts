const Disbursement = artifacts.require('Disbursement.sol')
const {receiver, wallet, disbursementPeriod, startDate} = require("../params.json")

module.exports = deployer => {
  // Validate params
  deployer.deploy(Disbursement, receiver, wallet, disbursementPeriod, startDate)
}