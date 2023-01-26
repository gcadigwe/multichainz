import {
  Flex,
  Text,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  useMediaQuery,
} from "@chakra-ui/react";
import SupplyModal from "../Modals/SupplyModal";

import { useEffect, useState } from "react";
import YieldFarmBody from "./YieldFarmBody";

const YieldFarming = ({ setreserveData }: any) => {
  const [isOpen, setisOpen] = useState(false);
  const [isborrowModalOpen, setisborrowModalOpen] = useState(false);
  //   const { addresses } = useFetchAddresses();
  //   const [recheckReserve, setrecheckReserver] = useState(false);
  //   const { reservesList } = useReserveList(
  //     addresses?.PoolAddress,
  //     recheckReserve
  //   );
  const [isSmallScreen] = useMediaQuery("(max-width: 1500px)");
  //   console.log(addresses);

  //   useEffect(() => {
  //     setreserveData(reservesList);
  //   }, [reservesList]);
  return (
    <>
      <Flex w='100%' justifyContent={"center"} pl={5} pr={5} mt={10}>
        <Flex mr={2} flexDirection={"column"}>
          <Text
            fontSize={"24px"}
            textAlign={"center"}
            color='#fff'
            fontWeight={"bold"}
          >
            Yield Farming
          </Text>
          <TableContainer maxHeight={"800px"} overflowY={"scroll"} mt={5}>
            <Table size='lg' variant='simple'>
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
                    TVL
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
                    Total Staked
                  </Th>

                  <Th
                    border={0}
                    color='rgba(255, 255, 255, 0.4)'
                    fontWeight={"500"}
                    textTransform={"capitalize"}
                  >
                    Reward Earned
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

              <YieldFarmBody />
              <Flex mt={2}></Flex>
              <YieldFarmBody />
              <Flex mt={2}></Flex>
              <YieldFarmBody />
            </Table>
          </TableContainer>
        </Flex>
      </Flex>
    </>
  );
};

export default YieldFarming;
