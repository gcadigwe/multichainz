import React from "react";
import Lending from "./pages/Lending";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import useConnectWallet from "./hooks/useConnectWallet";

function App() {
  useConnectWallet();
  return (
    <Box minH={"100vh"}>
      <Navbar />
      <Lending />
    </Box>
  );
}

export default App;
