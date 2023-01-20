import React from "react";
import Lending from "./pages/Lending";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import useConnectWallet from "./hooks/useConnectWallet";
import TransactioModal from "./components/Modals/TransactionModal";

function App() {
  useConnectWallet();
  return (
    <Box minH={"100vh"}>
      <Navbar />
      <TransactioModal />
      <Lending />
    </Box>
  );
}

export default App;
