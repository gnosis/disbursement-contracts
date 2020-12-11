# Simple Disbursment Contract / December 2020

### Files in scope

Following file:

<https://github.com/gnosis/disbursement-contracts/blob/eefb69b205e68355f88e9efe4bf2454cef4ec037/contracts/Disbursement.sol>

### Current status

No issues have been discovered

### Notes

1. calcMaxWithdraw returns incorrect value after disbusement period ends

`calcMaxWithdraw` will return more than the token balance of the contract after `startDate + disbursementPeriod`. This does not lead to any security issues but is not strictly correct.

2. if .. revert used instead of require

Instead of using `if` and `revert` statements, it's better to use `require` which combines the two.
