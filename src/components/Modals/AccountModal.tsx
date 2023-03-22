import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Img,
  ModalHeader,
  Text,
  Flex,
  ModalCloseButton,
  Icon,
} from "@chakra-ui/react";
import { shortenAddress } from "../../utils";
import { CopyIcon } from "@chakra-ui/icons";
import METAMASK from "../../assets/svg/metamask.svg";
import BINANCE from "../../assets/svg/binance.svg";
import WALLETCONNECT from "../../assets/svg/walletconnect.svg";
import PORTIS from "../../assets/svg/portis.svg";
import { useWeb3React } from "@web3-react/core";
import {
  connectorKey,
  ConnectorNames,
  connectorsByName,
} from "../../connectors/index";
import { FiLogIn } from "react-icons/fi";
import { TbExternalLink } from "react-icons/tb";
import { ETHERSCAN_ACCOUNT_URL } from "../../utils/constants/chains";

const AccountModal = ({
  onClose,
  isOpen,
  openConnectWallet,
}: {
  onClose: () => void;
  isOpen: boolean;
  openConnectWallet: () => void;
}) => {
  const { connector, account, chainId, deactivate } = useWeb3React();
  console.log(connector);

  const getConnectorName = () => {
    const name =
      connector === connectorsByName[ConnectorNames.Injected]
        ? "MetaMask"
        : connector === connectorsByName[ConnectorNames.BSC]
        ? "Binance Wallet"
        : connector === connectorsByName[ConnectorNames.WalletConnect]
        ? "Wallet Connect"
        : connector === connectorsByName[ConnectorNames.PORTIS]
        ? "Portis"
        : "";

    return name;
  };
  return (
    <Modal size={"sm"} onClose={onClose} isOpen={isOpen}>
      <ModalOverlay borderColor={"transparent"} />

      <ModalContent bgColor={"#141523"} px={4}>
        <ModalHeader textAlign={"center"} fontSize={"16px"}>
          Wallet Account
        </ModalHeader>
        <ModalCloseButton mt={1} />

        <ModalBody p={4}>
          <Flex
            p={2}
            borderRadius='8px'
            bg='linear-gradient(98.15deg, #6053F8 53.61%, #B16CE8 118.79%)'
            alignItems={"center"}
          >
            <Img
              src={
                connector === connectorsByName[ConnectorNames.Injected]
                  ? METAMASK
                  : connector === connectorsByName[ConnectorNames.BSC]
                  ? BINANCE
                  : connector === connectorsByName[ConnectorNames.WalletConnect]
                  ? WALLETCONNECT
                  : connector === connectorsByName[ConnectorNames.PORTIS]
                  ? PORTIS
                  : METAMASK
              }
              w='34px'
              h='34px'
            />
            <Flex mx={5} flexDirection={"column"}>
              <Text>{`Connected with ${getConnectorName()}`}</Text>
              <Text fontWeight={"bold"} fontSize='20px'>
                {shortenAddress(account as string, 4)}
              </Text>
              <a
                href={`${ETHERSCAN_ACCOUNT_URL[chainId as number]}${account}`}
                target='_blank'
                rel='noreferrer'
              >
                <Flex cursor={"pointer"}>
                  <Icon as={TbExternalLink} />
                  <Text fontSize={"12px"}>View on Etherscan Explorer</Text>
                </Flex>
              </a>
            </Flex>

            <CopyIcon boxSize={"6"} />
          </Flex>

          <Flex mt={10} justifyContent={"space-between"}>
            <Flex
              cursor={"pointer"}
              onClick={() => {
                deactivate();
                sessionStorage.removeItem(connectorKey);
                onClose();
              }}
              px={4}
              py={2}
              borderRadius='8px'
              border='1px solid white'
              alignItems={"center"}
            >
              <Text>Disconnect</Text>
              <Icon as={FiLogIn} />
            </Flex>

            <Flex
              onClick={() => {
                onClose();
                openConnectWallet();
              }}
              cursor={"pointer"}
              borderRadius={"8px"}
              px={4}
              py={2}
              bg='linear-gradient(98.15deg, #6053F8 53.61%, #B16CE8 118.79%)'
            >
              <Text>Change Wallet</Text>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AccountModal;
