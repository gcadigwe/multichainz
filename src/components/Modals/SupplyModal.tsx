import {
  Modal,
  Flex,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Img,
  Text,
  Switch,
  InputGroup,
  InputRightElement,
  Input,
  Button,
} from "@chakra-ui/react";
import CLOSE from "../../assets/svg/close.svg";
import BITCOIN from "../../assets/svg/bitcoin.svg";
import { useState } from "react";

interface ConnectWalletProps {
  onClose: () => void;
  isOpen: boolean;
}

const SupplyModal = ({ onClose, isOpen }: ConnectWalletProps) => {
  const [isDeposit, setisDeposit] = useState(true);
  return (
    <Modal size={"sm"} onClose={onClose} isOpen={isOpen}>
      <ModalOverlay borderColor={"transparent"} />
      <ModalContent>
        <ModalBody bgColor={"#141523"} p={4}>
          <Flex
            cursor={"pointer"}
            onClick={() => onClose()}
            justifyContent={"flex-end"}
          >
            <Img src={CLOSE} w='24px' h='24px' />
          </Flex>
          <Flex flexDirection={"column"} alignItems={"center"}>
            <Img src={BITCOIN} w='30px' h='30px' />
            <Text
              fontWeight={"600"}
              fontSize={"18px"}
              color={"rgba(255, 255, 255, 0.95)"}
              mt={2}
            >
              Bitcoin BTC
            </Text>
            <Text fontSize={"14px"} color={"rgba(255, 255, 255, 0.4)"}>
              In order to supply, you must first enable collateral
            </Text>
            <Flex mt={2}>
              <Flex
                py={1}
                px={2}
                border='1px solid #262735'
                borderRadius={"30px"}
              >
                <Text mr={1} fontSize={"12px"}>
                  Colleteral
                </Text>
                <Switch colorScheme={"purple"} />
              </Flex>
              <Flex
                bgColor={"rgba(111, 216, 178, 0.2)"}
                px={2}
                borderRadius={"30px"}
                py={1}
                alignItems={"center"}
              >
                <Text fontSize={"12px"} color='#6FD8B2'>
                  32.65% APR
                </Text>
              </Flex>
            </Flex>
            <Flex flexDirection={"column"} px={4} mt={10}>
              <Flex>
                <Flex
                  cursor={"pointer"}
                  px={12}
                  py={3}
                  bgColor={isDeposit ? "#262735" : "#191A28"}
                  borderRadius={"5px"}
                  onClick={() => setisDeposit(true)}
                >
                  <Text
                    fontWeight={"500"}
                    fontSize={"14px"}
                    color={"#ffffff"}
                    opacity={isDeposit ? 0.8 : 0.4}
                  >
                    Deposit
                  </Text>
                </Flex>
                <Flex
                  px={12}
                  py={3}
                  bgColor={isDeposit ? "#191A28" : "#262735"}
                  onClick={() => setisDeposit(false)}
                  cursor={"pointer"}
                  borderRadius={"5px"}
                >
                  <Text
                    fontWeight={"500"}
                    fontSize={"14px"}
                    color={"#ffffff"}
                    opacity={isDeposit ? 0.4 : 0.8}
                  >
                    Withdraw
                  </Text>
                </Flex>
              </Flex>
              <Flex mt={5} justifyContent={"space-between"}>
                <Text color='rgba(255, 255, 255, 0.7)' fontSize={"12px"}>
                  {isDeposit ? "Wallet bal" : `Available for Withdraw (0%)`}
                </Text>
                <Text color='rgba(255, 255, 255, 0.7)' fontSize={"12px"}>
                  0.45345 ETH
                </Text>
              </Flex>

              <InputGroup mt={3} border='none' borderColor={"#0C0D17"}>
                <Input
                  _hover={{ borderColor: "#0C0D17" }}
                  _focus={{ borderColor: "#0C0D17" }}
                  bgColor={"#0C0D17"}
                />
                <InputRightElement
                  children={
                    <Flex
                      borderRadius={"3px"}
                      mr={3}
                      p={"2px"}
                      bgColor={"#262735"}
                    >
                      <Text fontSize={"12px"} color='rgba(255, 255, 255, 0.95)'>
                        MAX
                      </Text>
                    </Flex>
                  }
                />
              </InputGroup>
              <Text
                color='rgba(255, 255, 255, 0.4)'
                fontSize={"12px"}
                textAlign={"center"}
                mt={3}
              >
                {isDeposit
                  ? "The assets will be locked as a colletral, but you can withdraw them at any time."
                  : "Your earned APY will be credited to your wallet with your Assets once you withdraw it."}
              </Text>

              <Button
                mt={3}
                h='50px'
                bg='linear-gradient(101.43deg, #6053F8 74.35%, #B46CE8 100%)'
                _hover={{
                  bg: "linear-gradient(101.43deg, #6053F8 74.35%, #B46CE8 100%)",
                }}
                _active={{
                  bg: "linear-gradient(101.43deg, #6053F8 74.35%, #B46CE8 100%)",
                }}
                fontSize={"14px"}
                fontWeight={"600"}
              >
                {isDeposit ? "Supply" : "Withdraw"}
              </Button>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SupplyModal;
