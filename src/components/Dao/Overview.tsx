import { Divider, Flex, Img, Text, useMediaQuery } from "@chakra-ui/react";
import LockIcon from "../../assets/svg/lock-icon.svg";
import THUMBSUP from "../../assets/svg/thumbsup.svg";

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
        pl={10}
        pr={5}
        pt={5}
        flexDirection={"column"}
      >
        <Flex
          borderRadius={"12px"}
          w='300px'
          p={4}
          pb={10}
          bgColor={"#191A28"}
          flexDirection={"column"}
          //   px={10}
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
          <Flex mt={5} alignItems={"center"}>
            <Img mr={5} h='70px' w='70px' src={THUMBSUP} />
            <Flex flexDirection={"column"}>
              <Text
                bg='linear-gradient(113.57deg, #ECCE82 34.81%, #FFF8E8 91.04%)'
                backgroundClip={"text"}
                style={{ WebkitTextFillColor: "transparent" }}
                fontWeight={"bold"}
                fontSize={"18px"}
              >
                {" "}
                0000
              </Text>
              <Text fontSize={"12px"} color='#ffffff' opacity={0.7}>
                Total Votes
              </Text>
            </Flex>
          </Flex>
          <Flex mt={5} flexDirection={"column"}>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
              <Text fontSize={"14px"} color='rgba(255, 255, 255, 0.4)'>
                Voting Address
              </Text>
              <Text fontSize={"14px"} color='rgba(255, 255, 255, 0.7)'>
                0.00
              </Text>
            </Flex>
            <Flex mt={4} alignItems={"center"} justifyContent={"space-between"}>
              <Text fontSize={"14px"} color='rgba(255, 255, 255, 0.4)'>
                Voting Address
              </Text>
              <Text fontSize={"14px"} color='rgba(255, 255, 255, 0.7)'>
                0.00
              </Text>
            </Flex>
            <Flex mt={4} alignItems={"center"} justifyContent={"space-between"}>
              <Text fontSize={"14px"} color='rgba(255, 255, 255, 0.4)'>
                Voting Address
              </Text>
              <Text fontSize={"14px"} color='rgba(255, 255, 255, 0.7)'>
                0.00
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          mt={5}
          borderRadius={"12px"}
          w='300px'
          p={4}
          //   pb={20}
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
            Voting Wallet
          </Text>
          <Divider opacity={0.1} />

          <Text mt={5} fontSize={"14px"} mb={1} color='#ffffff'>
            {" "}
            1223
          </Text>
          <Text fontSize={"12px"} color='rgba(255, 255, 255, 0.4)'>
            Multichainz Balance
          </Text>

          <Text mt={5} fontSize={"14px"} mb={1} color='#ffffff'>
            {" "}
            Setup Voting
          </Text>
          <Text pb={32} fontSize={"12px"} color='rgba(255, 255, 255, 0.4)'>
            You can either vote on each proposal yourself or delegate your votes
            to a third party. Compound Governance puts you in charge of the
            future of multichain
          </Text>

          <Flex
            py={3}
            borderRadius='6px'
            justifyContent={"center"}
            bg='linear-gradient(101.43deg, #6053F8 74.35%, #B46CE8 100%)'
            color='rgba(255, 255, 255, 0.9)'
            fontWeight={"bold"}
          >
            Delegate
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Overview;
