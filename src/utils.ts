import { BigNumber } from 'bignumber.js'
BigNumber.set({ EXPONENTIAL_AT: 30 })

export function convertDecimalStringToNumber(value: string, decimals = 24): number {
  return new BigNumber(value).div(new BigNumber(10).pow(new BigNumber(decimals))).toNumber()
}

export function convertNumberToDecimalString(value: number, decimals = 24): string {
  return new BigNumber(value).multipliedBy(new BigNumber(10).pow(new BigNumber(decimals))).toString()
}
