export enum SupportedChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GOERLI = 5,
  KOVAN = 6,
  POLYGON = 137,
  BINANCE = 56,
  BINANCETEST = 97,
  POLYGONTEST = 80001,
}

//supported chain ID ARRAY
export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = [
  //   SupportedChainId.MAINNET,
  SupportedChainId.BINANCE,
  SupportedChainId.POLYGON,
  SupportedChainId.POLYGONTEST,
  SupportedChainId.BINANCETEST,
  //   SupportedChainId.ROPSTEN,
];

export const ETHERSCAN_URL: { [key: string]: string } = {
  "80001": "https://mumbai.polygonscan.com/tx/",
};
