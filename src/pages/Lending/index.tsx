import { Flex } from "@chakra-ui/react";
import Market from "../../components/Lending/Market";
import Overview from "../../components/Lending/Overview";

const Lending = () => {
  return (
    <Flex flex={1}>
      <Overview />
      <Flex flex={0.8}>
        <Market />
      </Flex>
    </Flex>
  );
};

export default Lending;
