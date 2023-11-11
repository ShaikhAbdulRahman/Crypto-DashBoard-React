import {
  Button,
  Card,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
} from "@chakra-ui/react";
import React, { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { HiOutlineDownload } from "react-icons/hi";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TransacctionTable from "./components/TransacctionTable";
import { BsSearch } from "react-icons/bs";

const TransactionPage = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Widthdraw",
      count: 55,
    },
    {
      name: "Trade",
      count: 50,
    },
  ];
  const [searchText,setSearchText]=useState("");

  const handleSearch=(e)=>{
    setSearchText(e.target.value)
  }
  return (
    <DashboardLayout title="Transaction">
      <Flex justify="end" mt="6" mb="12px">
        <Button leftIcon={<Icon as={HiOutlineDownload} />}>Export CSV</Button>
      </Flex>
      <Card h="620" borderRadius="16px" mb="10">
        <Tabs>
          <TabList
            pt={4}
            display="flex"
            w="full"
            justifyContent="space-between"
          >
            {tabs.map((item) => (
              <Tab key={item.name} display="flex" gap="1" pb={4}>
                {item.name}
                <Tag colorScheme="gray" borderRadius="full" color="black.60">
                  {item.count}
                </Tag>
              </Tab>
            ))}
            <InputGroup maxW={"200px"} pr={6}>
              <InputLeftElement pointerEvents="none">
                <Icon as={BsSearch} />
              </InputLeftElement>
              <Input value={searchText} onChange={handleSearch} cursor="pointer" type="tel" placeholder="Search..." />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransacctionTable searchText={searchText} />
            </TabPanel>
            <TabPanel>
              <TransacctionTable searchText={searchText} />
            </TabPanel>
            <TabPanel>
              <TransacctionTable searchText={searchText} />
            </TabPanel>
            <TabPanel>
              <TransacctionTable searchText={searchText} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default TransactionPage;
