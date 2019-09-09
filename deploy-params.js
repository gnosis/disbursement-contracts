const endDate = new Date("Jul 15 2020 00:00:00 UTC")

module.exports = {
  receiver: "0x224CF0B963c59B95623b3Dd6ce07b4cE40F7b134", // The person/project receiving the grant
  wallet: "0x52DF85E9De71aa1C210873bcF37EC46d36c99dc2", // Wallet allowed to withdraw funds if critaria for the grant is not achieved
  // disbursementPeriod: 3600*24*365, // Amount of time in seconds for the disbursement
  disbursementPeriod: Math.floor(endDate/1000 - new Date()/1000),
  startDate: 0, // Starting time for the distribution, (cliff)
  token: "0x6810e776880c02933d47db1b9fc05908e5386b96" // Token used for payout
  // token: "0xc778417E063141139Fce010982780140Aa0cD5Ab"
}