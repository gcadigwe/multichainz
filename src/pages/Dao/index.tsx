import { Flex } from "@chakra-ui/react";
import Overview from "../../components/Dao/Overview";
import Dao from "../../components/Dao";

export default function YieldFarm() {
  return (
    <Flex mt={10}>
      <Overview />
      {/* <YieldFarming /> */}
      <Dao />
    </Flex>
  );
}
