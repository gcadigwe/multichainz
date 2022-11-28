import {
  Flex,
  Text,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
} from "@chakra-ui/react";
import SupplyModal from "../Modals/SupplyModal";
import BorrowMarket from "./BorrowMarket";
import SupplyMarket from "./SupplyMarket";
import { useState } from "react";
import BorrowModal from "../Modals/BorrowModal";

const Market = () => {
  const [isOpen, setisOpen] = useState(false);
  const [isborrowModalOpen, setisborrowModalOpen] = useState(false);
  return (
    <>
      <Flex flex='1' pl={5} pr={5} mt={10}>
        <Flex mr={2} flex='0.5' flexDirection={"column"}>
          <Text color='#fff' fontWeight={"bold"}>
            Supply Market
          </Text>
          <TableContainer mt={5}>
            <Table w='100%' variant='simple'>
              <Thead border='1px solid #20212E' bgColor={"#141523"}>
                <Tr>
                  <Th
                    border={0}
                    color='rgba(255, 255, 255, 0.4)'
                    fontWeight={"500"}
                    textTransform={"capitalize"}
                  >
                    Assets
                  </Th>
                  <Th
                    border={0}
                    color='rgba(255, 255, 255, 0.4)'
                    fontWeight={"500"}
                    textTransform={"capitalize"}
                  >
                    Liquidity
                  </Th>
                  <Th
                    border={0}
                    color='rgba(255, 255, 255, 0.4)'
                    fontWeight={"500"}
                    textTransform={"capitalize"}
                  >
                    APY
                  </Th>
                  <Th
                    border={0}
                    color='rgba(255, 255, 255, 0.4)'
                    fontWeight={"500"}
                    textTransform={"capitalize"}
                  >
                    Supplied
                  </Th>
                  <Th
                    border={0}
                    color='rgba(255, 255, 255, 0.4)'
                    fontWeight={"500"}
                    textTransform={"capitalize"}
                  >
                    Action
                  </Th>
                </Tr>
              </Thead>
              <SupplyMarket openModal={() => setisOpen(true)} />
              <SupplyMarket openModal={() => setisOpen(true)} />
              <SupplyMarket openModal={() => setisOpen(true)} />
            </Table>
          </TableContainer>
        </Flex>

        <Flex ml={2} flex='0.5' flexDirection={"column"}>
          <Text color='#fff' fontWeight={"bold"}>
            Borrow Market
          </Text>
          <TableContainer mt={5}>
            <Table variant='simple'>
              <Thead border='1px solid #20212E' bgColor={"#141523"}>
                <Tr>
                  <Th
                    border={0}
                    color='rgba(255, 255, 255, 0.4)'
                    fontWeight={"500"}
                    textTransform={"capitalize"}
                  >
                    Assets
                  </Th>
                  <Th
                    border={0}
                    color='rgba(255, 255, 255, 0.4)'
                    fontWeight={"500"}
                    textTransform={"capitalize"}
                  >
                    Liquidity
                  </Th>
                  <Th
                    border={0}
                    color='rgba(255, 255, 255, 0.4)'
                    fontWeight={"500"}
                    textTransform={"capitalize"}
                  >
                    APY
                  </Th>
                  <Th
                    border={0}
                    color='rgba(255, 255, 255, 0.4)'
                    fontWeight={"500"}
                    textTransform={"capitalize"}
                  >
                    Supplied
                  </Th>
                  <Th
                    border={0}
                    color='rgba(255, 255, 255, 0.4)'
                    fontWeight={"500"}
                    textTransform={"capitalize"}
                  >
                    Action
                  </Th>
                </Tr>
              </Thead>
              <BorrowMarket openModal={() => setisborrowModalOpen(true)} />
              <BorrowMarket openModal={() => setisborrowModalOpen(true)} />
              <BorrowMarket openModal={() => setisborrowModalOpen(true)} />
            </Table>
          </TableContainer>
        </Flex>
      </Flex>
      <SupplyModal isOpen={isOpen} onClose={() => setisOpen(false)} />
      <BorrowModal
        isOpen={isborrowModalOpen}
        onClose={() => setisborrowModalOpen(false)}
      />
    </>
  );
};

export default Market;
