import {
  Modal,
  Flex,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Img,
  Text,
} from "@chakra-ui/react";
import CLOSE from "../../assets/svg/close.svg";
import METAMASK from "../../assets/svg/metamask.svg";
import BINANCE from "../../assets/svg/binance.svg";
import WALLETCONNECT from "../../assets/svg/walletconnect.svg";
import PORTIS from "../../assets/svg/portis.svg";
import {
  connectorKey,
  ConnectorNames,
  connectorsByName,
} from "../../connectors/index";
import { useWeb3React } from "@web3-react/core";

interface ConnectWalletProps {
  onClose: () => void;
  isOpen: boolean;
}

const ConnectWallet = ({ onClose, isOpen }: ConnectWalletProps) => {
  const hoverColor = "linear-gradient(101.43deg, #6053F8 74.35%, #B46CE8 100%)";

  const { activate } = useWeb3React();
  return (
    <Modal size={"sm"} onClose={onClose} isOpen={isOpen}>
      <ModalOverlay borderColor={"transparent"} />
      <ModalContent>
        <ModalBody bgColor={"#141523"} p={4}>
          <Flex justifyContent={"flex-end"}>
            <Img src={CLOSE} w='24px' h='24px' />
          </Flex>
          <Flex mt={3} mb={6} alignItems={"center"} flexDirection={"column"}>
            <Text
              fontWeight={"600"}
              fontSize={"18px"}
              color={"rgba(255, 255, 255, 0.95)"}
            >
              Connect your wallet
            </Text>
            <Text color='rgba(255, 255, 255, 0.4)' fontSize={"12px"}>
              Please connect any of wallet bellow to access
            </Text>
          </Flex>

          <Flex mt={10} flexDirection={"column"}>
            <Flex
              _hover={{
                bg: hoverColor,
              }}
              borderRadius={"8px"}
              cursor={"pointer"}
              w='100%'
              bgColor={"#191A28"}
              py={4}
              alignItems={"center"}
              px={3}
              onClick={() => {
                activate(connectorsByName[ConnectorNames.Injected]);
                sessionStorage.setItem(connectorKey, ConnectorNames.Injected);
                onClose();
              }}
            >
              <Img w='40px' h='40px' mr={3} src={METAMASK} />
              <Text fontWeight={"600"} color='rgba(255, 255, 255, 0.95)'>
                MetaMask
              </Text>
            </Flex>

            <Flex
              mt={5}
              _hover={{
                bg: hoverColor,
              }}
              borderRadius={"8px"}
              cursor={"pointer"}
              w='100%'
              bgColor={"#191A28"}
              py={4}
              alignItems={"center"}
              px={3}
              onClick={() => {
                activate(connectorsByName[ConnectorNames.BSC]);
                sessionStorage.setItem(connectorKey, ConnectorNames.BSC);
                onClose();
              }}
            >
              <Img w='40px' h='40px' mr={3} src={BINANCE} />
              <Text fontWeight={"600"} color='rgba(255, 255, 255, 0.95)'>
                Binance Chain Wallet
              </Text>
            </Flex>

            <Flex
              mt={5}
              _hover={{
                bg: hoverColor,
              }}
              borderRadius={"8px"}
              cursor={"pointer"}
              w='100%'
              bgColor={"#191A28"}
              py={4}
              alignItems={"center"}
              px={3}
              onClick={() => {
                activate(connectorsByName[ConnectorNames.WalletConnect]);
                sessionStorage.setItem(
                  connectorKey,
                  ConnectorNames.WalletConnect
                );
                onClose();
              }}
            >
              <Img w='40px' h='40px' mr={3} src={WALLETCONNECT} />
              <Text fontWeight={"600"} color='rgba(255, 255, 255, 0.95)'>
                WalletConnect
              </Text>
            </Flex>

            <Flex
              mt={5}
              _hover={{
                bg: hoverColor,
              }}
              borderRadius={"8px"}
              cursor={"pointer"}
              w='100%'
              bgColor={"#191A28"}
              py={4}
              alignItems={"center"}
              px={3}
              onClick={() => {
                activate(connectorsByName[ConnectorNames.PORTIS]);
                sessionStorage.setItem(connectorKey, ConnectorNames.PORTIS);
                onClose();
              }}
            >
              <Img w='40px' h='40px' mr={3} src={PORTIS} />
              <Text fontWeight={"600"} color='rgba(255, 255, 255, 0.95)'>
                Portis
              </Text>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ConnectWallet;
