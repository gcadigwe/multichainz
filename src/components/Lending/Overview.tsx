import { Divider, Flex, Img, Text } from "@chakra-ui/react";
import LockIcon from "../../assets/svg/lock-icon.svg";
import { InfoOutlineIcon } from "@chakra-ui/icons";

const Overview = () => {
  return (
    <>
      <Flex
        mt={5}
        border='1px'
        borderBottomWidth={0}
        flex={0.2}
        pl={10}
        pr={8}
        pt={5}
        flexDirection={"column"}
      >
        <Flex
          borderRadius={"12px"}
          w='260px'
          p={4}
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
              $4,816,275,460
            </Text>
            <Text fontSize={"12px"} color='#ffffff' opacity={0.7}>
              Total Value Locked
            </Text>
          </Flex>

          <Text fontSize={"14px"} mt={10} mb={3} color='#ffffff'>
            {" "}
            $4,816,275,460
          </Text>
          <Text fontSize={"12px"} color='#ffffff' opacity={0.7}>
            Total Supply
          </Text>

          <Text fontSize={"14px"} mt={5} mb={3} color='#ffffff'>
            {" "}
            $4,816,275,460
          </Text>
          <Text mb={3} fontSize={"12px"} color='#ffffff' opacity={0.7}>
            Total Supply
          </Text>
        </Flex>

        <Flex
          mt={5}
          borderRadius={"12px"}
          w='260px'
          p={4}
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
            0.00
          </Text>
          <Text fontSize={"12px"} color='#ffffff' opacity={0.7}>
            Supply balance
          </Text>

          <Text mt={5} fontSize={"14px"} mb={1} color='#ffffff'>
            {" "}
            0.00
          </Text>
          <Text fontSize={"12px"} color='#ffffff' opacity={0.7}>
            Borrow balance
          </Text>

          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Flex flexDirection={"column"}>
              <Text mt={5} fontSize={"14px"} mb={1} color='#ffffff'>
                {" "}
                0.00
              </Text>
              <Text fontSize={"12px"} color='#ffffff' opacity={0.7}>
                Borrow limit <InfoOutlineIcon />
              </Text>
            </Flex>
            <Flex
              mt={5}
              border='2px'
              borderWidth={"medium"}
              h='30px'
              w='30px'
              borderColor={"#373848"}
              borderRadius={"50%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text fontSize={"12px"} color='#ffffff'>
                {" "}
                0
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Overview;
