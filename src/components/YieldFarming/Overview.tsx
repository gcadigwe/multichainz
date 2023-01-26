import { Divider, Flex, Img, Text, useMediaQuery } from "@chakra-ui/react";
import LockIcon from "../../assets/svg/lock-icon.svg";
import { InfoOutlineIcon } from "@chakra-ui/icons";

const Overview = () => {
  // CalculateTotalSupply(reserveData);
  const [isSmallScreen] = useMediaQuery("(max-width: 1500px)");
  return (
    <>
      <Flex
        mt={5}
        border='1px'
        borderColor={"#20212E"}
        borderBottomWidth={0}
        flex={0.2}
        pl={isSmallScreen ? 5 : 10}
        pr={isSmallScreen ? 2 : 5}
        pt={5}
        flexDirection={"column"}
      >
        <Flex
          borderRadius={"12px"}
          w='260px'
          p={4}
          pb={20}
          bgColor={"#191A28"}
          flexDirection={"column"}
        >
          <Text
            fontSize={"12px"}
            fontWeight={"bold"}
            color='#ffffff'
            opacity={0.7}
          >
            Overview
          </Text>
          <Divider opacity={0.1} />
          <Flex mt={5} flexDirection={"column"} alignItems={"center"}>
            <Img h='70px' w='70px' src={LockIcon} />
            <Text
              bg='linear-gradient(113.57deg, #ECCE82 34.81%, #FFF8E8 91.04%)'
              backgroundClip={"text"}
              style={{ WebkitTextFillColor: "transparent" }}
              fontWeight={"bold"}
              fontSize={"18px"}
            >
              {" "}
              23324
            </Text>
            <Text fontSize={"12px"} color='#ffffff' opacity={0.7}>
              Total Value Locked
            </Text>
          </Flex>
        </Flex>

        <Flex
          mt={5}
          borderRadius={"12px"}
          w='260px'
          p={4}
          pb={20}
          mb={5}
          bgColor={"#191A28"}
          flexDirection={"column"}
        >
          <Text
            fontSize={"12px"}
            fontWeight={"bold"}
            color='#ffffff'
            opacity={0.7}
          >
            Account
          </Text>
          <Divider opacity={0.1} />

          <Text mt={5} fontSize={"14px"} mb={1} color='#6FD8B2'>
            {" "}
            0.00%
          </Text>
          <Text fontSize={"12px"} color='#ffffff' opacity={0.7}>
            Net APY
          </Text>

          <Text mt={5} fontSize={"14px"} mb={1} color='#ffffff'>
            {" "}
            1223
          </Text>
          <Text fontSize={"12px"} color='#ffffff' opacity={0.7}>
            My Total Staked
          </Text>

          <Text mt={5} fontSize={"14px"} mb={1} color='#ffffff'>
            {" "}
            12
          </Text>
          <Text fontSize={"12px"} color='#ffffff' opacity={0.7}>
            Total Earned
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Overview;
