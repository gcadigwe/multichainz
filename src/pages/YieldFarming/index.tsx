import { Flex } from "@chakra-ui/react";
import YieldFarming from "../../components/YieldFarming";
import Overview from "../../components/YieldFarming/Overview";

export default function YieldFarm() {
  return (
    <Flex mt={10}>
      <Overview />
      <YieldFarming />
    </Flex>
  );
}
