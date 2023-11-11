import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Stack,
  Text,
  Tag,
} from "@chakra-ui/react";

const TransacctionTable = ({ searchText}) => {
  const tableData = [
    {
      id: "HD82NA2H",
      date: "2022-06-09",
      time: "07:06 PM",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer",
      },
      amount: "+ ₹81,123.10",
      status: "pending",
    },
    {
      id: "HD82NA4H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "INR Widthdraw",
        tag: "Wire Transfer",
      },
      amount: "-₹55,123",
      status: "processing",
    },
    {
      id: "HD82NA5H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Buy",
        tag: "BTC",
      },
      amount: "12.0554484 BTC",
      status: "cancelled",
    },
    {
      id: "HD82NA6H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Sell",
        tag: "BTC",
      },
      amount: "-2.0554484 BTC",
      status: "completed",
    },
    {
      id: "HD82NA7H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "BTC Deposit",
      },
      amount: "+15.5000000",
      status: "pending",
    },
    {
      id: "HD82NA8H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "BTC Widthdraw",
      },
      amount: "-5.05555544",
      status: "completed",
    },
  ];

  const statusColor = {
    pending: "#797E82",
    processing: "#F5A50B",
    completed: "#059669",
    cancelled: "#DC2626",
  };
  const filteredData = tableData.filter((data) => {
    const idMatch = data.id.toLowerCase().includes(searchText.toLowerCase());
    const typeMatch = data.type.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    return idMatch || typeMatch;
  });
  return (
    <div>
      <TableContainer>
        <Table variant="simple" colorScheme="gray">
          <Thead>
            <Tr>
              <Th fontSize="13px" fontWeight="medium" color="black.60">
                ID
              </Th>
              <Th fontSize="13px" fontWeight="medium" color="black.60">
                Date & Time
              </Th>
              <Th fontSize="13px" fontWeight="medium" color="black.60">
                Type
              </Th>
              <Th fontSize="13px" fontWeight="medium" color="black.60">
                Amount
              </Th>
              <Th fontSize="13px" fontWeight="medium" color="black.60">
                Status
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredData.map((data) => (
              <Tr key={data.id}>
                <Td fontSize="16px" fontWeight="medium">
                  {data.id}
                </Td>
                <Td>
                  <Stack spacing={0}>
                    <Text fontSize="md" fontWeight="medium">
                      {data.date}
                    </Text>
                    <Text fontSize="sm" color="black.60">
                      {data.time}
                    </Text>
                  </Stack>
                </Td>
                <Td>
                  <Stack spacing={0}>
                    <Text fontSize="16px" fontWeight="medium">
                      {data.type.name}
                    </Text>
                    <Text fontSize="15px" color="black.60">
                      {data.type?.tag}
                    </Text>
                  </Stack>
                </Td>
                <Td fontSize="16px" fontWeight="medium">
                  {data.amount}
                </Td>
                <Td fontSize="16px" fontWeight="medium">
                  <Tag
                    bg={statusColor[data.status]}
                    color="white"
                    borderRadius="full"
                  >
                    {data.status}
                  </Tag>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TransacctionTable;
