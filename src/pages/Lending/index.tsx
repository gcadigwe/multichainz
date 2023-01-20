import { Flex } from "@chakra-ui/react";
import Market from "../../components/Lending/Market";
import Overview from "../../components/Lending/Overview";
import { useState } from "react";

const Lending = () => {
  const [reserveData, setreserveData] = useState<any>();
  return (
    <Flex flex={1}>
      <Overview reserveData={reserveData} />
      <Flex flex={0.8}>
        <Market setreserveData={setreserveData} />
      </Flex>
    </Flex>
  );
};

export default Lending;
