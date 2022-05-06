const endDate = new Date("April 29 2025 00:00:00 UTC")

module.exports = {
  receiver: "0x322e4Ce2620039f14872458F5E6C295EB8b4688E", // The person/project receiving the grant
  wallet: "0x0DA0C3e52C977Ed3cBc641fF02DD271c3ED55aFe", // Wallet allowed to withdraw funds if criteria for the grant is not achieved
  // disbursementPeriod: 3600*24*365, // Amount of time in seconds for the disbursement
  disbursementPeriod: Math.floor(endDate/1000 - new Date()/1000),
  startDate: 0, // Starting time for the distribution, (cliff)
  token: "0x6810e776880c02933d47db1b9fc05908e5386b96" // Token used for payout
}
