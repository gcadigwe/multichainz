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
import { ethers } from "ethers";
import { ERC20Token, getContract } from "../../utils/Contract";
import { useWeb3React } from "@web3-react/core";
import poolAbi from "../../utils/abi/IPool.json";
import { calculateAvailable } from "../../utils/utilFunctions";
import { useDispatch } from "react-redux";

import { setModalDisplay } from "../../state/transaction";

interface ConnectWalletProps {
  onClose: () => void;
  isOpen: boolean;
  reservesData: any;
  poolAddress: any;
  setrecheckReserve: any;
}

const SupplyModal = ({
  onClose,
  isOpen,
  reservesData,
  poolAddress,
  setrecheckReserve,
}: ConnectWalletProps) => {
  const [isDeposit, setisDeposit] = useState(true);
  const { library, account } = useWeb3React();
  const [input, setinput] = useState("");
  const [withdrawInput, setwithdrawInput] = useState("");

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

  const approveToken = async () => {
    try {
      dispatchModal(
        "Ensure that the approve request has been confirmed. Check your MetaMask if you cannot see any requests.",
        "confirmation",
        `Approve ${reservesData?.symbol}`
      );
      const token = ERC20Token(reservesData?.address, library);

      const approveTx = await token.approve(
        poolAddress,
        ethers.utils.parseUnits(input, reservesData?.decimals)
      );

      const tx = await approveTx.wait();

      if (tx.confirmations >= 1) {
        console.log(tx);
        setrecheckReserve();
        dispatchModal(
          "",
          "success",
          `Approve ${reservesData?.symbol} complete`
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const supply = async () => {
    try {
      dispatchModal(
        "Transaction is in loading state. Usually it takes some time to complete. Please wait.",
        "confirmation",
        `Supplying ${reservesData?.symbol}`
      );
      const IPool = getContract(poolAddress, library, poolAbi.abi);

      const supplyTx = await IPool.supply(
        reservesData?.address,
        ethers.utils.parseUnits(input, reservesData?.decimals),
        account,
        1
      );

      const tx = await supplyTx.wait();

      if (tx.confirmations >= 1) {
        console.log("supply sucessful");
        setrecheckReserve();
        setinput("");
        dispatchModal(
          "Your Assets has been supplied, you can check the details by clicking on the link given below",
          "success",
          `Supply Completed`,
          tx?.transactionHash
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const withdraw = async () => {
    try {
      dispatchModal(
        "Transaction is in loading state. Usually it takes some time to complete. Please wait.",
        "confirmation",
        `Withdrawing ${reservesData?.symbol}`
      );
      const IPool = getContract(poolAddress, library, poolAbi.abi);

      const withdrawTx = await IPool.withdraw(
        reservesData?.address,
        ethers.utils.parseUnits(withdrawInput, reservesData?.decimals),
        account
      );

      const tx = await withdrawTx.wait();

      if (tx.confirmations >= 1) {
        console.log(tx);
        setrecheckReserve();
        setwithdrawInput("");
        dispatchModal(
          "Your Assets has been withdrawn, you can check the details by clicking on the link given below",
          "success",
          `Withdraw Completed`,
          tx?.transactionHash
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

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
            <Img
              src={reservesData?.logo ? reservesData.logo : BITCOIN}
              w='30px'
              h='30px'
            />
            <Text
              fontWeight={"600"}
              fontSize={"18px"}
              color={"rgba(255, 255, 255, 0.95)"}
              mt={2}
            >
              {reservesData?.name} {reservesData?.symbol}
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
                <Text color='rgba(255, 255, 255, 0.7)' mr={1} fontSize={"12px"}>
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
                  {isDeposit
                    ? "Wallet bal"
                    : `Available for Withdraw (${calculateAvailable(
                        reservesData?.userReserveData.currentATokenBalance.toString(),
                        reservesData?.userReserveData.currentStableDebt,
                        reservesData?.userReserveData.scaledVariableDebt
                      )}%)`}
                </Text>
                <Text color='rgba(255, 255, 255, 0.7)' fontSize={"12px"}>
                  {isDeposit
                    ? ethers.utils.formatUnits(
                        reservesData?.balance.toString(),
                        reservesData?.decimals
                      )
                    : parseFloat(
                        ethers.utils.formatUnits(
                          reservesData?.userReserveData.currentATokenBalance.toString(),
                          reservesData?.decimals
                        )
                      ).toFixed(1)}{" "}
                  {reservesData?.symbol}
                </Text>
              </Flex>

              {isDeposit ? (
                <InputGroup mt={3} border='none' borderColor={"#0C0D17"}>
                  <Input
                    color='rgba(255, 255, 255, 0.95)'
                    _hover={{ borderColor: "#0C0D17" }}
                    _focus={{ borderColor: "#0C0D17" }}
                    bgColor={"#0C0D17"}
                    value={input}
                    onChange={(e) => setinput(e.target.value)}
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
                    _hover={{ borderColor: "#0C0D17" }}
                    _focus={{ borderColor: "#0C0D17" }}
                    bgColor={"#0C0D17"}
                    value={withdrawInput}
                    onChange={(e) => setwithdrawInput(e.target.value)}
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
                {isDeposit
                  ? "The assets will be locked as a colletral, but you can withdraw them at any time."
                  : "Your earned APY will be credited to your wallet with your Assets once you withdraw it."}
              </Text>

              {isDeposit &&
              parseFloat(ethers.utils.formatUnits(reservesData?.allowance)) <
                parseFloat(input) ? (
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
                  disabled={parseFloat(input) === 0 || !input}
                  onClick={() => approveToken()}
                >
                  {`Approve ${reservesData?.symbol}`}
                </Button>
              ) : isDeposit ? (
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
                  onClick={() => {
                    if (isDeposit) {
                      supply();
                    }
                  }}
                  disabled={
                    parseFloat(
                      ethers.utils.formatUnits(reservesData?.allowance)
                    ) < parseFloat(input) ||
                    parseFloat(input) === 0 ||
                    !input
                  }
                >
                  {isDeposit ? "Supply" : "Withdraw"}
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
                  onClick={() => {
                    if (isDeposit) {
                      supply();
                    } else {
                      withdraw();
                    }
                  }}
                  disabled={parseFloat(withdrawInput) === 0 || !withdrawInput}
                >
                  {isDeposit ? "Supply" : "Withdraw"}
                </Button>
              )}
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SupplyModal;
