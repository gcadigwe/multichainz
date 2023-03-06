import {
  Flex,
  Img,
  Spacer,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import MULTICHAINZ from "../../assets/svg/multichainz.svg";
import ETHEREUM from "../../assets/svg/ethereum.svg";
import WALLET from "../../assets/svg/wallet.svg";
import { ChevronDownIcon, CopyIcon } from "@chakra-ui/icons";
import ConnectWallet from "../Modals/ConnectWallet";
import { useWeb3React } from "@web3-react/core";
import METAMASK from "../../assets/svg/metamask.svg";
import BINANCE from "../../assets/svg/binance.svg";
import WALLETCONNECT from "../../assets/svg/walletconnect.svg";
import PORTIS from "../../assets/svg/portis.svg";
import { ConnectorNames, connectorsByName } from "../../connectors/index";
import { shortenAddress } from "../../utils";
import { Link, NavLink } from "react-router-dom";
import { NETWORK_NAME, NETWORK_LOGO } from "../../utils/constants/chains";

const Navbar = () => {
  const [isOpen, setOpenModal] = useState(false);
  const { account, connector, chainId, error } = useWeb3React();
  let activeStyle = {
    fontWeight: "bold",
  };

  console.log("error", error);
  return (
    <>
      <Flex alignItems={"center"} px={10} pt={5}>
        <Flex>
          <Img mr={2} src={MULTICHAINZ} h='24px' w='24px' />
          <Text fontSize={"18px"} fontWeight={"700"} color='#E7E7E7'>
            Multichainz
          </Text>
        </Flex>

        <Flex ml={40}>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#ffffff",
                    fontWeight: "bold",
                  }
                : {
                    fontWeight: "normal",
                    color: "rgba(255, 255, 255, 0.7)",
                  }
            }
            to='/'
          >
            <Text mr={5} cursor={"pointer"}>
              Lending
            </Text>
          </NavLink>

          <Text mr={5} cursor={"pointer"} color='rgba(255, 255, 255, 0.7)'>
            Market
          </Text>

          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#ffffff",
                    fontWeight: "bold",
                  }
                : {
                    fontWeight: "normal",
                    color: "rgba(255, 255, 255, 0.7)",
                  }
            }
            to='/yield-farming'
          >
            <Text mr={5} cursor={"pointer"}>
              Yield Farming
            </Text>
          </NavLink>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#ffffff",
                    fontWeight: "bold",
                  }
                : {
                    fontWeight: "normal",
                    color: "rgba(255, 255, 255, 0.7)",
                  }
            }
            to='/dao'
          >
            <Text mr={5} cursor={"pointer"}>
              Dao Governance
            </Text>
          </NavLink>
          <Text cursor={"pointer"} color='rgba(255, 255, 255, 0.7)'>
            Community
          </Text>
        </Flex>
        <Spacer />
        <Flex>
          <Menu>
            <MenuButton
              _hover={{
                backgroundColor: "none",
                color: "none",
              }}
              _active={{
                backgroundColor: "none",
                color: "none",
              }}
              mr={5}
              bgColor={
                error?.name === "UnsupportedChainIdError"
                  ? "#FC8180"
                  : "#58647B"
              }
              as={Button}
              rightIcon={
                error?.name === "UnsupportedChainIdError" ? (
                  ""
                ) : (
                  <ChevronDownIcon color={"rgba(255, 255, 255, 0.9)"} />
                )
              }
            >
              {error?.name === "UnsupportedChainIdError" ? (
                <Flex alignItems={"center"}>
                  <Text fontSize={"14px"} fontWeight={"800"} color='white'>
                    UNSUPPORTED NETWORK
                  </Text>
                </Flex>
              ) : (
                <Flex alignItems={"center"}>
                  <Img
                    mr={1}
                    src={NETWORK_LOGO[chainId as number]}
                    w='24px'
                    h='24px'
                  />
                  <Text fontWeight={"500"} color='rgba(255, 255, 255, 0.9)'>
                    {NETWORK_NAME[chainId as number]}
                  </Text>
                </Flex>
              )}
            </MenuButton>
            {/* <MenuList>
              <MenuItem>Polygon</MenuItem>
            </MenuList> */}
          </Menu>

          {account ? (
            <Flex cursor={"pointer"} bgColor={"#191A28"} alignItems={"center"}>
              <Img
                src={
                  connector === connectorsByName[ConnectorNames.Injected]
                    ? METAMASK
                    : connector === connectorsByName[ConnectorNames.BSC]
                    ? BINANCE
                    : connector ===
                      connectorsByName[ConnectorNames.WalletConnect]
                    ? WALLETCONNECT
                    : connector === connectorsByName[ConnectorNames.PORTIS]
                    ? PORTIS
                    : METAMASK
                }
                w='24px'
                h='24px'
              />
              <Text color='rgba(255, 255, 255, 0.9)' fontSize={"14px"} mx={2}>
                {shortenAddress(account)}
              </Text>
              <CopyIcon />
            </Flex>
          ) : (
            <Flex
              cursor={"pointer"}
              borderRadius={"6px"}
              bg='linear-gradient(98.15deg, #6053F8 53.61%, #B16CE8 118.79%)'
              alignItems={"center"}
              px={2}
              onClick={() => setOpenModal(true)}
            >
              <Img mr={1} src={WALLET} w='24px' h='24px' />
              <Text fontWeight={"600"} color='rgba(255, 255, 255, 0.9)'>
                Connect Wallet
              </Text>
            </Flex>
          )}
        </Flex>
      </Flex>

      <ConnectWallet onClose={() => setOpenModal(false)} isOpen={isOpen} />
    </>
  );
};

export default Navbar;
