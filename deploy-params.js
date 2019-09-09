module.exports = {
  receiver: "0xe9c371eC2Ff267c7e63D3359576b367AADFC20Fa", // The person/project receiving the grant
  wallet: "0x2851c5AbE017E969a22b38E9FD6736584D4Bb1e0", // Wallet allowed to withdraw funds if critaria for the grant is not achieved
  disbursementPeriod: 3600*24*365, // Amount of time in seconds for the disbursement
  startDate: 0, // Starting time for the distribution, (cliff)
  token: "0x6810e776880c02933d47db1b9fc05908e5386b96" // Token used for payout
}