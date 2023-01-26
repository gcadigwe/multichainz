import {
  Flex,
  Text,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  useMediaQuery,
  Select,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import Proposal from "./Proposal";
//   import YieldFarmBody from "./YieldFarmBody";

const Dao = ({ setreserveData }: any) => {
  const [isOpen, setisOpen] = useState(false);
  const [isborrowModalOpen, setisborrowModalOpen] = useState(false);
  const [isSmallScreen] = useMediaQuery("(max-width: 1500px)");

  return (
    <>
      <Flex w='100%' pl={5} pr={5} mt={5}>
        <Flex w='100%' pt={4} mr={2} flexDirection={"column"}>
          <Flex w='100%' justifyContent={"space-between"} alignItems='center'>
            <Text
              fontSize={"20px"}
              textAlign={"center"}
              color='#fff'
              fontWeight={"bold"}
            >
              Proposals
            </Text>
            <Select
              borderColor='#262735;'
              color='rgba(255, 255, 255, 0.9)'
              w='150px'
              borderRadius={"20px"}
            >
              <option>All Proposals</option>
            </Select>
          </Flex>
          <Proposal />
          <Proposal />
          <Proposal />
          <Proposal />
          <Proposal />
        </Flex>
      </Flex>
    </>
  );
};

export default Dao;
