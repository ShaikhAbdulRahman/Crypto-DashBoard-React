import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";

const PriceSection = () => {
  const timestamps = ["7.15 PM", "12.55 AM", "6.35 AM", "12.15 PM", "5.55 PM"];
  return (
    <CustomCard h="full">
      <Flex justify="space-between" align="start">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="12px" fontWeight="medium">
              Current Price
            </Text>
          </HStack>
          <HStack spacing={2}>
            <Text fontSize="20px" fontWeight="medium">
              ₹ 26,670.25
            </Text>
            <HStack fontSize="12px" spacing={0.5}>
              <Icon as={BsArrowUpRight} color="#059669" />
              <Text fontWeight="500" color="#059669">
                22%
              </Text>
            </HStack>
            {/* <Tag colorScheme="gray">INR</Tag> */}
          </HStack>
        </Stack>
        < HStack>
          <Button variant="solid" leftIcon={<Icon as={AiFillPlusCircle} />}>
            Buy
          </Button>
          <Button variant="solid" leftIcon={<Icon as={AiFillMinusCircle} />}>
            Sell
          </Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded">
        <Flex justify="end">
          <TabList bg="black.5" p="3px">
            {["1D", "1W", "1M", "1Y"].map((tab) => (
              <Tab
                _selected={{ bg: "white" }}
                key={tab}
                fontSize="sm"
                px="6px"
                borderRadius="4"
                h="10px"
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
          <Image src="/Graph.svg" w="100%" mt="40px" />
            <HStack justify="space-between">
              {timestamps.map((item) => (
                <Text key={item} mt="1" fontSize="10px" color="black.60">
                  {item}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel fontSize="15px" color="black.60">
            <p>Data not found</p>
          </TabPanel>
          <TabPanel fontSize="15px" color="black.60">
            <p>Data not found</p>
          </TabPanel>
          <TabPanel fontSize="15px" color="black.60">
            <p>Data not found</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
