import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

export const FACTORY_ADDRESS = '0xcce6eb38A4b565300c771f6541451A07a625dfe2'

export const REFERENCE_TOKEN = '0xe538905cf8410324e03a5a23c1c177a474d59b2b'
export const STABLE_TOKEN_PAIRS = ['0x89608d3dac35d535180f18d2c302a7b4b87f3c75']

export const TVL_MULTIPLIER_THRESHOLD = '2'
export const MATURE_MARKET = '1000000'
export const MINIMUM_NATIVE_LOCKED = BigDecimal.fromString('0')

export const ROLL_DELETE_HOUR = 768
export const ROLL_DELETE_MINUTE = 1680

export const ROLL_DELETE_HOUR_LIMITER = BigInt.fromI32(500)
export const ROLL_DELETE_MINUTE_LIMITER = BigInt.fromI32(1000)

// token where amounts should contribute to tracked volume and liquidity
// usually tokens that many tokens are paired with s
export const WHITELIST: string[] = [
  REFERENCE_TOKEN, // WOKB
  '0x74b7f16337b8972027f6196a17a631ac6de26d22', // USDC
  '0x1e4a5963abfd975d8c9021ce480b42188849d41d', // USDT
  '0x5a77f1443d16ee5761d310e38b62f77f726bc71c', // WETH
]

export const STABLECOINS: string[] = [
  '0x74b7f16337b8972027f6196a17a631ac6de26d22',
  '0x1e4a5963abfd975d8c9021ce480b42188849d41d',
]

export const SKIP_POOLS: string[] = []

export const POOL_MAPINGS: Array<Address[]> = []

export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt
}

export const STATIC_TOKEN_DEFINITIONS: TokenDefinition[] = [
  {
    address: Address.fromString('0x74b7f16337b8972027f6196a17a631ac6de26d22'),
    symbol: 'USDC',
    name: 'USD Coin',
    decimals: BigInt.fromI32(6),
  },
  {
    address: Address.fromString('0x1e4a5963abfd975d8c9021ce480b42188849d41d'),
    symbol: 'USDT',
    name: 'Tether USD',
    decimals: BigInt.fromI32(6),
  },
]

export const SKIP_TOTAL_SUPPLY: string[] = []

export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('0.0001')

export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('0.0001')