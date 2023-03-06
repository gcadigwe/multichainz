import { Web3Provider } from "@ethersproject/providers";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { BscConnector } from "@binance-chain/bsc-connector";
import { PortisConnector } from "@web3-react/portis-connector";
import {
  ALL_SUPPORTED_CHAIN_IDS,
  SupportedChainId,
} from "../utils/constants/chains";

const RPC = {
  // [SupportedChainId.BINANCE]: "https://bsc-dataseed.binance.org",
  // [SupportedChainId.BINANCETEST]:
  //   "https://data-seed-prebsc-2-s3.binance.org:8545",

  [SupportedChainId.POLYGON]: `https://rpc-mainnet.maticvigil.com/`,
  [SupportedChainId.POLYGONTEST]: "https://rpc-mumbai.matic.today",
};

export enum ConnectorNames {
  Injected = "injected",
  WalletConnect = "walletconnect",
  BSC = "bsc",
  PORTIS = "portis",
}

// const NETWORK_URL = process.env.REACT_APP_NETWORK_URL;
// export const NETWORK_CHAIN_ID: number = parseInt(
//   process.env.REACT_APP_CHAIN_ID ?? "56"
// );

// if (typeof NETWORK_URL == "undefined") {
//   throw new Error(
//     `REACT_APP_NETWORK_URL must be a defined environment variable`
//   );
// }

export const injected = new InjectedConnector({
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
});
const supportedChainIds = [80001, 137];

export const checkSupportedIds = (chainID: number) =>
  supportedChainIds.some((id) => id === chainID);
export const bscConnector = new BscConnector({
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
});

export const portis = new PortisConnector({
  dAppId: process.env.REACT_APP_PORTIS_DAPP_ID as string,
  networks: [1],
});

export const walletconnect = new WalletConnectConnector({
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
  rpc: RPC,
  qrcode: true,
  // bridge: 'https://bridge.walletconnect.org',
  // pollingInterval: 15000,
});

export const connectorKey = "connectv2";

export const connectorsByName = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
  [ConnectorNames.BSC]: bscConnector,
  [ConnectorNames.PORTIS]: portis,
};
