import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

export const FACTORY_ADDRESS = '0x50C58AAe3212B5CaD681B52b94d3Eb44AdaFd4ed'

export const REFERENCE_TOKEN = '0x5a77f1443d16ee5761d310e38b62f77f726bc71c'
export const STABLE_TOKEN_POOL = '0x9eb8b90D27DC1738A0F5114f0BB72f35EC331528'

export const TVL_MULTIPLIER_THRESHOLD = '2'
export const MATURE_MARKET = '1000000'
export const MINIMUM_NATIVE_LOCKED = BigDecimal.fromString('0')

export const ROLL_DELETE_HOUR = 768
export const ROLL_DELETE_MINUTE = 1680

export const ROLL_DELETE_HOUR_LIMITER = BigInt.fromI32(500)
export const ROLL_DELETE_MINUTE_LIMITER = BigInt.fromI32(1000)

// token where amounts should contribute to tracked volume and liquidity
// usually tokens that many tokens are paired with s
export const WHITELIST_TOKENS: string[] = [
  REFERENCE_TOKEN, // WETH
  '0x74b7f16337b8972027f6196a17a631ac6de26d22', // USDC
  '0x1e4a5963abfd975d8c9021ce480b42188849d41d', // USDT
]

export const STABLE_COINS: string[] = [
  '0x1e4a5963abfd975d8c9021ce480b42188849d41d',
  '0x74b7f16337b8972027f6196a17a631ac6de26d22',
]

export const SKIP_POOLS: string[] = ['0x8fe8d9bb8eeba3ed688069c3d6b556c9ca258248']

export const POOL_MAPINGS: Array<Address[]> = []

export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt
}

export const STATIC_TOKEN_DEFINITIONS: TokenDefinition[] = [
  {
    address: Address.fromString('0x1e4a5963abfd975d8c9021ce480b42188849d41d'),
    symbol: 'USDT',
    name: 'Tether USD',
    decimals: BigInt.fromI32(6),
  },
  {
    address: Address.fromString('0x74b7f16337b8972027f6196a17a631ac6de26d22'),
    symbol: 'USDC',
    name: 'USD Coin',
    decimals: BigInt.fromI32(6),
  },
]
