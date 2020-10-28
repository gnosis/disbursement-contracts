const endDate = new Date("March 01 2022 00:00:00 UTC")

module.exports = {
  receiver: "0x3257Bde8CF067aE6f1DDc0E4b140fe02e3C5e44f", // The person/project receiving the grant
  wallet: "0x3257Bde8CF067aE6f1DDc0E4b140fe02e3C5e44f", // Wallet allowed to withdraw funds if criteria for the grant is not achieved
  // disbursementPeriod: 3600*24*365, // Amount of time in seconds for the disbursement
  disbursementPeriod: Math.floor(endDate/1000 - new Date()/1000),
  startDate: 0, // Starting time for the distribution, (cliff)
  token: "0x6810e776880c02933d47db1b9fc05908e5386b96" // Token used for payout
}