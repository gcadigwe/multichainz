import {
  Modal,
  Flex,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Img,
  Text,
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

const BorrowModal = ({ onClose, isOpen }: ConnectWalletProps) => {
  const [isBorrow, setisBorrow] = useState(true);
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
              Provide the collateral for taking the loan
            </Text>
            <Flex mt={2}>
              <Flex
                py={1}
                px={2}
                bgColor={"rgba(225, 184, 79, 0.08)"}
                borderRadius={"30px"}
              >
                <Text color='#E1B84F' fontSize={"12px"}>
                  My Loan 0.42345 ETH
                </Text>
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
              <Flex w='100%' justifyContent={"center"}>
                <Flex
                  px={14}
                  py={2}
                  bgColor={isBorrow ? "#262735" : "#191A28"}
                  borderRadius={"5px"}
                  onClick={() => setisBorrow(true)}
                  cursor={"pointer"}
                >
                  <Text
                    fontWeight={"500"}
                    fontSize={"14px"}
                    color={"#ffffff"}
                    opacity={isBorrow ? 0.8 : 0.4}
                  >
                    Borrow
                  </Text>
                </Flex>
                <Flex
                  onClick={() => setisBorrow(false)}
                  cursor={"pointer"}
                  px={14}
                  py={2}
                  bgColor={isBorrow ? "#191A28" : "#262735"}
                >
                  <Text
                    fontWeight={"500"}
                    fontSize={"14px"}
                    color={"#ffffff"}
                    opacity={isBorrow ? 0.4 : 0.8}
                  >
                    Repay
                  </Text>
                </Flex>
              </Flex>
              <Flex mt={5} justifyContent={"space-between"}>
                <Text color='rgba(255, 255, 255, 0.7)' fontSize={"12px"}>
                  {isBorrow ? "Avl Borrow limit (88%)" : "Total Repay"}
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
                {isBorrow
                  ? "Your are eligible to get loan, and your collateral amount will be locked"
                  : "You are being charged APR 32.6% for your loan amount while repaying the loan amount "}
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
                {isBorrow ? "Borrow" : "Repay"}
              </Button>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default BorrowModal;
