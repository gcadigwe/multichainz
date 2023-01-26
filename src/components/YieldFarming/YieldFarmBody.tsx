import { Flex, Tbody, Tr, Td, Img, Text, Button } from "@chakra-ui/react";
import BITCOIN from "../../assets/svg/bitcoin.svg";
import StakeModal from "../Modals/StakeModal";
import { useState } from "react";

interface YieldFarmBody {}
const YieldFarmBody = ({}: YieldFarmBody) => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <>
      <Tbody bgColor={"#191A28"}>
        <Tr>
          <Td border={0}>
            <Flex alignItems={"center"}>
              <Img mr={2} src={BITCOIN} w='32px' h='32px' />
              <Flex flexDirection={"column"}>
                <Text
                  fontSize={"14px"}
                  fontWeight={"bold"}
                  color='rgba(255, 255, 255, 0.95)'
                >
                  BITCOIN
                </Text>
                <Text fontSize={"12px"} color='rgba(255, 255, 255, 0.4)'>
                  0.00 BTC
                </Text>
              </Flex>
            </Flex>
          </Td>
          <Td border={0} color=' rgba(255, 255, 255, 0.7)' fontSize={"14px"}>
            232323
          </Td>
          <Td border={0} fontSize={"14px"} color='#6FD8B2'>
            10 %
          </Td>
          <Td border={0} color=' rgba(255, 255, 255, 0.7)' fontSize={"14px"}>
            2424
          </Td>
          <Td border={0} color=' rgba(255, 255, 255, 0.7)' fontSize={"14px"}>
            2424
          </Td>
          <Td border={0}>
            <Button
              onClick={() => setisOpen(true)}
              _active={{}}
              _hover={{ backgroundColor: "none", color: "none" }}
              fontSize={"14px"}
              fontWeight={"500"}
              bgColor={"#373848"}
              color='rgba(255, 255, 255, 0.9)'
            >
              Stake
            </Button>
          </Td>
        </Tr>
      </Tbody>

      <StakeModal isOpen={isOpen} onClose={() => setisOpen(false)} />
    </>
  );
};

export default YieldFarmBody;
