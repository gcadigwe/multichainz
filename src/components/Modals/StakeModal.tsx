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
import { getContract, ERC20Token } from "../../utils/Contract";
import { useWeb3React } from "@web3-react/core";
import poolAbi from "../../utils/abi/IPool.json";
import { ethers } from "ethers";
import { useDispatch } from "react-redux";

import { setModalDisplay } from "../../state/transaction";

interface StakeModalProps {
  onClose: () => void;
  isOpen: boolean;
}

const StakeModal = ({ onClose, isOpen }: StakeModalProps) => {
  const [isBorrow, setisBorrow] = useState(true);
  const [borrowInput, setborrowInput] = useState("");
  const [repayInput, setrepayInput] = useState("");
  const { library, account } = useWeb3React();

  const dispatch = useDispatch();

  const dispatchModal = (
    msg: string,
    status: string,
    title: string,
    hash?: string
  ) => {
    dispatch(
      setModalDisplay({
        msg: msg,
        display: true,
        status: status,
        title: title,
        hash: hash,
      })
    );
  };

  // const borrow = async () => {
  //   try {
  //     dispatchModal(
  //       "Transaction is in loading state. Usually it takes some time to complete. Please wait.",
  //       "confirmation",
  //       `Borrowing ${reservesData?.symbol}`
  //     );
  //     const IPool = getContract(poolAddress, library, poolAbi.abi);

  //     const borrowTx = await IPool.borrow(
  //       reservesData?.address,
  //       ethers.utils.parseUnits(borrowInput, reservesData?.decimals),
  //       2,
  //       0,
  //       account
  //     );

  //     const tx = await borrowTx.wait();

  //     if (tx?.confirmations >= 1) {
  //       console.log("borrow sucessful");
  //       setrecheckReserve();
  //       setborrowInput("");
  //       dispatchModal(
  //         "Your transaction was successful, you can check the details by clicking on the link given below",
  //         "success",
  //         `Borrow Completed`,
  //         tx?.transactionHash
  //       );
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const repay = async () => {
  //   try {
  //     dispatchModal(
  //       "Transaction is in loading state. Usually it takes some time to complete. Please wait.",
  //       "confirmation",
  //       `Repaying ${reservesData?.symbol}`
  //     );
  //     const IPool = getContract(poolAddress, library, poolAbi.abi);

  //     const repayTx = await IPool.repay(
  //       reservesData?.address,

  //       ethers.utils.parseUnits(repayInput, reservesData?.decimals),
  //       2,
  //       account
  //     );

  //     const tx = await repayTx.wait();

  //     if (tx?.confirmations >= 1) {
  //       console.log("repay sucessful");
  //       setrecheckReserve();
  //       setrepayInput("");
  //       dispatchModal(
  //         "Your transaction was successful, you can check the details by clicking on the link given below",
  //         "success",
  //         `Repay Completed`,
  //         tx?.transactionHash
  //       );
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const approveToken = async () => {
  //   try {
  //     dispatchModal(
  //       "Ensure that the approve request has been confirmed. Check your MetaMask if you cannot see any requests.",
  //       "confirmation",
  //       `Approve ${reservesData?.symbol}`
  //     );
  //     const token = ERC20Token(reservesData?.address, library);

  //     const approveTx = await token.approve(
  //       poolAddress,
  //       ethers.utils.parseUnits(repayInput, reservesData?.decimals)
  //     );

  //     const { confirmations } = await approveTx.wait();

  //     if (confirmations >= 1) {
  //       setrecheckReserve();
  //       dispatchModal(
  //         "",
  //         "success",
  //         `Approve ${reservesData?.symbol} complete`
  //       );
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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
              Stake ETH to earn MTC
            </Text>
            <Flex mt={2}>
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
                    Deposit
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
                    Withdraw
                  </Text>
                </Flex>
              </Flex>
              <Flex mt={5} justifyContent={"space-between"}>
                <Text color='rgba(255, 255, 255, 0.7)' fontSize={"12px"}>
                  Total Staked
                </Text>
                <Text color='rgba(255, 255, 255, 0.7)' fontSize={"12px"}>
                  24242323
                </Text>
              </Flex>
              {isBorrow ? (
                <InputGroup mt={3} border='none' borderColor={"#0C0D17"}>
                  <Input
                    color='rgba(255, 255, 255, 0.95)'
                    value={borrowInput}
                    onChange={(e) => setborrowInput(e.target.value)}
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
                        <Text
                          fontSize={"12px"}
                          color='rgba(255, 255, 255, 0.95)'
                        >
                          MAX
                        </Text>
                      </Flex>
                    }
                  />
                </InputGroup>
              ) : (
                <InputGroup mt={3} border='none' borderColor={"#0C0D17"}>
                  <Input
                    color='rgba(255, 255, 255, 0.95)'
                    value={repayInput}
                    onChange={(e) => setrepayInput(e.target.value)}
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
                        <Text
                          fontSize={"12px"}
                          color='rgba(255, 255, 255, 0.95)'
                        >
                          MAX
                        </Text>
                      </Flex>
                    }
                  />
                </InputGroup>
              )}
              <Text
                color='rgba(255, 255, 255, 0.4)'
                fontSize={"12px"}
                textAlign={"center"}
                mt={3}
              >
                {isBorrow
                  ? "The assets will be locked as a colletral, but you can withdraw them at any time."
                  : "The assets will be locked as a colletral, but you can withdraw them at any time. "}
              </Text>
              {isBorrow ? (
                <Button
                  // onClick={() => borrow()}
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
                  disabled={!borrowInput || borrowInput === "0"}
                >
                  Stake
                </Button>
              ) : (
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
                  disabled={!repayInput || repayInput === "0"}
                >
                  Withdraw
                </Button>
              )}
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default StakeModal;
