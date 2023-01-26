import { Suspense } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import useConnectWallet from "./hooks/useConnectWallet";
import TransactioModal from "./components/Modals/TransactionModal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AppRoutes, routes } from "./utils/constants/routes";

function App() {
  useConnectWallet();
  return (
    <Suspense fallback={null}>
      <Router>
        <Box minH={"100vh"}>
          <Navbar />
          <TransactioModal />
          <Routes>
            {routes.map((route: AppRoutes, index: number) => {
              const { component: Component, path, exact } = route;

              return <Route key={index} path={path} element={<Component />} />;
            })}
          </Routes>
        </Box>
      </Router>
    </Suspense>
  );
}

export default App;
