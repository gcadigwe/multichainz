import {
  Flex,
  Text,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  useMediaQuery,
  Tbody,
} from "@chakra-ui/react";
import SupplyModal from "../Modals/SupplyModal";
import BorrowMarket from "./BorrowMarket";
import SupplyMarket from "./SupplyMarket";
import { useEffect, useState } from "react";
import BorrowModal from "../Modals/BorrowModal";
import useFetchAddresses from "../../hooks/useFetchAddresses";
import useReserveList from "../../hooks/useReserveList";
import SkeletonLoader from "../Loader/Skeleton";

const Market = ({ setreserveData }: any) => {
  const [isOpen, setisOpen] = useState(false);
  const [isborrowModalOpen, setisborrowModalOpen] = useState(false);

  const { addresses } = useFetchAddresses();
  const [recheckReserve, setrecheckReserver] = useState(false);
  const { reservesList, loading } = useReserveList(
    addresses?.PoolAddress,
    recheckReserve
  );
  const [isSmallScreen] = useMediaQuery("(max-width: 1500px)");
  console.log(addresses);

  useEffect(() => {
    setreserveData(reservesList);
  }, [reservesList]);
  return (
    <>
      <Flex flex='1' pl={5} pr={5} mt={10}>
        <Flex mr={2} flex='0.5' flexDirection={"column"}>
          <Text color='#fff' fontWeight={"bold"}>
            Supply Market
          </Text>
          <TableContainer maxHeight={"800px"} overflowY={"scroll"} mt={5}>
            <Table size={isSmallScreen ? "sm" : "md"} variant='simple'>
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

              {loading
                ? [1, 2, 3, 4, 5, 6].map(() => (
                    <>
                      <SkeletonLoader />
                      <Flex mb={2} />
                    </>
                  ))
                : loading === false && reservesList
                ? reservesList?.map((reserve: any, i: any) => (
                    <SupplyMarket
                      reserves={reserve}
                      key={i}
                      openModal={() => setisOpen(true)}
                      poolAddress={addresses?.PoolAddress}
                      setrecheckReserve={() =>
                        setrecheckReserver(!recheckReserve)
                      }
                    />
                  ))
                : null}

              {/* <SupplyMarket openModal={() => setisOpen(true)} />
              <SupplyMarket openModal={() => setisOpen(true)} />
              <SupplyMarket openModal={() => setisOpen(true)} /> */}
            </Table>
          </TableContainer>
        </Flex>

        <Flex ml={2} flex='0.5' flexDirection={"column"}>
          <Text color='#fff' fontWeight={"bold"}>
            Borrow Market
          </Text>
          <TableContainer maxHeight={"800px"} overflowY={"scroll"} mt={5}>
            <Table size={isSmallScreen ? "sm" : "md"} variant='simple'>
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
                    Borrowed
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
              {loading
                ? [1, 2, 3, 4, 5, 6].map(() => (
                    <>
                      <SkeletonLoader />
                      <Flex mb={2} />
                    </>
                  ))
                : loading === false && reservesList
                ? reservesList?.map((reserve: any, i: any) => (
                    <BorrowMarket
                      reserves={reserve}
                      key={i}
                      openModal={() => setisOpen(true)}
                      poolAddress={addresses?.PoolAddress}
                      setrecheckReserve={() =>
                        setrecheckReserver(!recheckReserve)
                      }
                    />
                  ))
                : null}
              {/* // {loading === false &&
              //   reservesList?.map((reserve: any, i: any) => (
              //     <BorrowMarket
              //       reserves={reserve}
              //       key={i}
              //       openModal={() => setisOpen(true)}
              //       poolAddress={addresses?.PoolAddress}
              //       setrecheckReserve={() =>
              //         setrecheckReserver(!recheckReserve)
              //       }
              //     />
              //   ))} */}
            </Table>
          </TableContainer>
        </Flex>
      </Flex>
      {/* <SupplyModal isOpen={isOpen} onClose={() => setisOpen(false)} /> */}
    </>
  );
};

export default Market;
