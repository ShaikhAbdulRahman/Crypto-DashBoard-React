import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const PortfolioSection = () => {
  return (
    <HStack
      justify="space-between"
      bg="white"
      borderRadius="xl"
      p="4"
      align={{
        base: "flex-start",
        sm: "center",
      }}
      flexDir={{
        base: "column",
        sm: "row",
      }}
      spacing={{base:"4",xl:"0"}}
    >
      <HStack spacing={{
        base:"0",
        xl:"16"
      }}   
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDir={{
        base: "column",
        xl: "row",
      }}>
        <Stack>
          <HStack color="black.80">
            <Text fontSize="12px">Total Portfolio Value</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <Text fontSize="20px" fontWeight="500">
            ₹ 112,312.24
          </Text>
        </Stack>
        <Stack>
          <HStack color="black.80">
            <Text fontSize="12px">Wallet Balances</Text>
          </HStack>
          <HStack spacing={6}>
            <HStack>
              <Text fontSize="20px" fontWeight="500">
                22.39401000
              </Text>
              <Tag colorScheme="gray">BTC</Tag>
            </HStack>
            <HStack>
              <Text fontSize="20px" fontWeight="500">
                ₹ 1,300.00
              </Text>
              <Tag colorScheme="gray">INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>
      <HStack>
        <Button variant="solid">Deposit</Button>
        <Button variant="solid">Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
