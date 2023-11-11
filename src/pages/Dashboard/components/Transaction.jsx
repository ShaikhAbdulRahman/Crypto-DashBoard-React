import React, { Fragment } from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Box, Button, Divider, Flex, Grid, Icon, Stack, Text } from "@chakra-ui/react";
import { HiCurrencyRupee } from "react-icons/hi";
import { FaBtc } from "react-icons/fa";

const Transaction = () => {
  const transaction = [
    {
      id: "1",
      icon: HiCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: FaBtc,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-05-27 12:32 PM",
    },
    {
      id: "3",
      icon: HiCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];
  return (
    <CustomCard h="full">
      <Text mb="2" fontSize="12px" fontWeight="medium" color="black.80">
        Recent Transactions
      </Text>
      <Stack spacing={4}>
        {transaction.map((item,index) => (
          <Fragment key={item.id}>
            {index != 0 &&  <Divider/>}
            <Flex gap="4">
              <Grid
                placeItems="center"
                bg="#F3F3F7"
                boxSize={10}
                borderRadius="full"
              >
                <Icon as={item.icon} fontSize="xl" />
              </Grid>
              <Flex justify="space-between" w="full">
                <Stack spacing={0}>
                  <Text fontSize="14px" fontWeight="medium">
                    {item.text}
                  </Text>
                  <Text fontSize="12px" fontWeight="medium" color="black.60">
                    {item.timestamp}
                  </Text>
                </Stack>
                <Text fontSize="14px" fontWeight="medium">
                  {item.amount}
                </Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button w="full" mt="18px" colorScheme="gray">View All</Button>
    </CustomCard>
  );
};

export default Transaction;
