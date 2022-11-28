import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import getLibrary from "./utils/getLibrary";
import { Web3ReactProvider, createWeb3ReactRoot } from "@web3-react/core";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </Web3ReactProvider>
);
