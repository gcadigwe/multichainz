export enum SupportedChainId {
  POLYGON = 137,

  POLYGONTEST = 80001,
}

//supported chain ID ARRAY
export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = [
  //   SupportedChainId.MAINNET,
  // SupportedChainId.BINANCE,
  SupportedChainId.POLYGON,
  SupportedChainId.POLYGONTEST,
  // SupportedChainId.BINANCETEST,
  //   SupportedChainId.ROPSTEN,
];

export const ALL_SUPPORTED_CHAIN_ID_NUMBERS = [80001, 137];

export const ETHERSCAN_URL: { [key: string]: string } = {
  "80001": "https://mumbai.polygonscan.com/tx/",
};

export const NETWORK_LOGO: { [key: string]: string } = {
  "80001":
    "https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png",
  "137":
    "https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png",
};

export const NETWORK_NAME: { [key: string]: string } = {
  "80001": "Mumbai",
  "137": "Polygon",
};
