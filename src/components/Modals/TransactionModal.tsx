import {
  Modal,
  Flex,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Img,
  Spinner,
  Text,
} from "@chakra-ui/react";
import CLOSE from "../../assets/svg/close.svg";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store";
import { setModalDisplay } from "../../state/transaction";
import SUCCESS from "../../assets/svg/success.svg";
import { ETHERSCAN_URL } from "../../utils/constants/chains";
import { useWeb3React } from "@web3-react/core";

const TransactioModal = () => {
  const dispatch = useDispatch();

  const { chainId } = useWeb3React();

  const transactionState = useSelector((state: RootState) => state.transaction);

  const closeModal = () => {
    dispatch(
      setModalDisplay({
        msg: "",
        display: false,
        status: "",
        title: "",
        hash: "",
      })
    );
  };

  return (
    <Modal
      size={"sm"}
      isCentered
      onClose={closeModal}
      isOpen={transactionState.display}
    >
      <ModalOverlay borderColor={"transparent"} />
      <ModalContent h='430px'>
        <ModalBody bgColor={"#141523"} p={4}>
          <Flex
            cursor={"pointer"}
            onClick={() => closeModal()}
            justifyContent={"flex-end"}
          >
            <Img src={CLOSE} w='24px' h='24px' />
          </Flex>
          <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            h='100%'
          >
            {transactionState.status === "confirmation" ? (
              <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='#6053F8'
                size='xl'
              />
            ) : transactionState.status === "success" ? (
              <Img src={SUCCESS} />
            ) : (
              <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='#6053F8'
                size='xl'
              />
            )}

            <Text fontSize={"18px"} my={5} fontWeight={"600"} color='white'>
              {transactionState?.title ? transactionState.title : ""}
            </Text>
            <Text
              textAlign={"center"}
              fontSize={"14px"}
              color='rgba(255, 255, 255, 0.4)'
            >
              {transactionState?.msg ? transactionState.msg : ""}
            </Text>

            <a
              target={"_blank"}
              rel='noreferrer'
              href={`${ETHERSCAN_URL[chainId as number]}${
                transactionState?.hash
              }`}
            >
              <Text fontSize={"14px"} textAlign={"center"} color='#6053F8'>
                {transactionState?.hash
                  ? `${transactionState.hash.slice(0, 15)}...`
                  : ""}
              </Text>
            </a>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default TransactioModal;
