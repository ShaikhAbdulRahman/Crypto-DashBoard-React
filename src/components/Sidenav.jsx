import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const Sidenav = () => {

  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transactions",
      link: "/transaction",
    },
  ];
  return (
    <Stack
      bg="white"
      justify="space-between"
      boxShadow={{ base: "none", lg: "lg" }}
      w={{
        base: "full",
        lg: "13rem",
      }}
      h="full"
    >
      <Box position="fixed">
        <Heading
          as="h1"
          fontWeight="500"
          fontSize="20px"
          pt="56px"
          textAlign="center"
          color="#5F00D9"
          px="4"
        >
          @ABDULRAHMAN
        </Heading>
        <Box mt="1rem" mx="3"  position="fixed">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                mx="12px"
                py="3"
                px="4"
                borderRadius="10px"
                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717",
                }}
                color="#797E82"
              >
                <Icon as={nav.icon} />
                <Text fontSize="14px" fontWeight="medium">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>

      <Box mt="32rem" mx="3" mb="6" position="fixed">
        <Link to="/support">
          <HStack
            mx="12px"
            py="3"
            px="4"
            borderRadius="10px"
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
            }}
            color="#797E82"
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium" >
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
