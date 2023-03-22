import { SkeletonText, Flex, Tbody, Tr, Td, Skeleton } from "@chakra-ui/react";

const SkeletonLoader = () => {
  return (
    <Tbody justifyContent='space-between'>
      <Tr py={4} border='1px solid #20212E' h='50px'>
        <Td border={0}>
          <SkeletonText
            startColor='white'
            fadeDuration={0.3}
            noOfLines={2}
            h='10px'
          />
        </Td>
        <Td border={0}>
          <SkeletonText
            startColor='white'
            fadeDuration={0.3}
            noOfLines={1}
            h='10px'
          />
        </Td>
        <Td border={0}>
          <SkeletonText
            startColor='white'
            fadeDuration={0.3}
            noOfLines={1}
            h='10px'
          />
        </Td>
        <Td border={0}>
          <SkeletonText
            startColor='white'
            fadeDuration={0.3}
            noOfLines={1}
            h='10px'
          />
        </Td>
        <Td border={0}>
          {/* <SkeletonText noOfLines={1} h='10px' /> */}
          <Skeleton startColor='white' fadeDuration={0.3} h='30px' />
        </Td>
      </Tr>
    </Tbody>
  );
};

export default SkeletonLoader;
