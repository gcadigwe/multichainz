import { Flex, Tbody, Tr, Td, Img, Text, Button } from "@chakra-ui/react";
import BITCOIN from "../../assets/svg/bitcoin.svg";
import { ethers } from "ethers";
import SupplyModal from "../Modals/SupplyModal";
import { useState } from "react";
import { calculateSupplyApy } from "../../utils/utilFunctions";

interface SupplyMarketModal {
  openModal: () => void;
  reserves: any;
  poolAddress: any;
  setrecheckReserve: (value: React.SetStateAction<boolean>) => void;
}
const SupplyMarket = ({
  openModal,
  reserves,
  poolAddress,
  setrecheckReserve,
}: SupplyMarketModal) => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      <Tbody bgColor={"#191A28"}>
        <Tr mb={2}>
          <Td border={0}>
            <Flex alignItems={"center"}>
              <Img mr={2} src={BITCOIN} w='32px' h='32px' />
              <Flex flexDirection={"column"}>
                <Text
                  fontSize={"14px"}
                  fontWeight={"bold"}
                  color='rgba(255, 255, 255, 0.95)'
                >
                  {reserves?.symbol}
                </Text>
                <Text fontSize={"12px"} color='rgba(255, 255, 255, 0.4)'>
                  0.00 {reserves?.symbol}
                </Text>
              </Flex>
            </Flex>
          </Td>
          <Td border={0} color=' rgba(255, 255, 255, 0.7)' fontSize={"14px"}>
            {/* {reserves?.reservesData.ltv.toString()} */}
            {parseFloat(
              ethers.utils.formatUnits(
                reserves?.balance.toString(),
                reserves?.decimals
              )
            ).toFixed(2)}
          </Td>
          <Td border={0} fontSize={"14px"} color='#6FD8B2'>
            {calculateSupplyApy(
              reserves?.poolReserveData.currentLiquidityRate.toString(),
              false
            )}
            %
          </Td>
          <Td border={0} color=' rgba(255, 255, 255, 0.7)' fontSize={"14px"}>
            {parseFloat(
              ethers.utils.formatUnits(
                reserves?.userReserveData.currentATokenBalance.toString(),
                reserves?.decimals
              )
            ).toFixed(2)}
          </Td>
          <Td border={0}>
            <Button
              _active={{}}
              _hover={{ backgroundColor: "none", color: "none" }}
              fontSize={"14px"}
              fontWeight={"500"}
              bgColor={"#373848"}
              color='rgba(255, 255, 255, 0.9)'
              onClick={() => setisOpen(true)}
            >
              Supply
            </Button>
          </Td>
        </Tr>
      </Tbody>
      <SupplyModal
        reservesData={reserves}
        isOpen={isOpen}
        onClose={() => setisOpen(false)}
        poolAddress={poolAddress}
        setrecheckReserve={setrecheckReserve}
      />
    </>
  );
};

export default SupplyMarket;
