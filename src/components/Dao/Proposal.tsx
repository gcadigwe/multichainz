import { Flex, Text } from "@chakra-ui/react";

const Proposal = () => {
  return (
    <Flex
      mt={4}
      px={6}
      py={3}
      bgColor='#191A28'
      w='100%'
      justifyContent={"space-between"}
      alignItems='center'
      borderRadius={"12px"}
    >
      <Flex mt={5} flexDirection={"column"}>
        <Text
          fontSize={"18px"}
          fontWeight='600'
          color='rgba(255, 255, 255, 0.95)'
        >
          Parameter Changes for Aave V2 Ethereum Market
        </Text>
        <Text fontWeight={"12px"} color='rgba(255, 255, 255, 0.7)'>
          A proposal to make parameter changes on Aave V2 ETH.
        </Text>
        <Flex alignItems={"center"} mt={4}>
          <Text color='#E14F4F' fontSize={"14px"}>
            Failed
          </Text>
          <Text mx={4} color='rgba(255, 255, 255, 0.4)' fontSize={"14px"}>
            {" "}
            • 134 •
          </Text>
          <Text color='rgba(255, 255, 255, 0.4)' fontSize={"14px"}>
            Failled on Nov 16th 2022
          </Text>
        </Flex>
      </Flex>
      <Flex
        color='rgba(255, 255, 255, 0.7)'
        bgColor='#262735'
        borderRadius='16px'
        px={3}
        py={1}
      >
        <Text>Cancelled</Text>
      </Flex>
    </Flex>
  );
};

export default Proposal;
