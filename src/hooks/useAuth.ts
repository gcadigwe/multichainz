import {
  connectorKey,
  ConnectorNames,
  connectorsByName,
} from "../connectors/index";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";

import { NoBscProviderError } from "@binance-chain/bsc-connector";
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from "@web3-react/walletconnect-connector";
import {
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
  NoEthereumProviderError,
} from "@web3-react/injected-connector";
import { useCallback } from "react";

const useAuth = () => {
  const context = useWeb3React();
  const { activate, deactivate, setError, error } = context;

  const login = useCallback(
    (connectorID: ConnectorNames) => {
      const connector = connectorsByName[connectorID];

      if (connector) {
        activate(connector, async (error: Error) => {
          if (!error) {
            activate(connector);
          }
          if (error instanceof UnsupportedChainIdError) {
            setError({
              name: "UnsupportedChainIdError",
              message: error.message,
            });
          } else {
            window.localStorage.removeItem(connectorKey);
            if (
              error instanceof NoEthereumProviderError ||
              error instanceof NoBscProviderError
            ) {
              console.log("no provider found");
            } else if (
              error instanceof UserRejectedRequestErrorInjected ||
              error instanceof UserRejectedRequestErrorWalletConnect
            ) {
              if (connector instanceof WalletConnectConnector) {
                const walletConnector = connector as WalletConnectConnector;
                walletConnector.walletConnectProvider = undefined;
              }
              console.log("authorize your account");
            } else {
              console.log(
                "Please check if wallet is logged in or has pending transactions."
              );
            }
          }
        });
      } else {
        // console.log("Unable to connect wallet");
      }
    },
    [activate, setError]
  );

  const logout = useCallback(() => {
    deactivate();
    if (window.localStorage.getItem("walletconnect")) {
      connectorsByName.walletconnect.close();
      connectorsByName.walletconnect.walletConnectProvider = undefined;
    }
    window.localStorage.removeItem(connectorKey);
  }, [deactivate]);

  return { login, logout };
};

export default useAuth;
