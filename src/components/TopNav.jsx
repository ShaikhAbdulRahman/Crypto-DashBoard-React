import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { PiUserCircleThin } from "react-icons/pi";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopNav = ({ title, onOpen }) => {
  return (
    <Stack>
      <Box px="4" bg="white">
        <HStack maxW="55rem" mx="auto" h="60px" justify="space-between">
          <Icon
            as={FaBars}
            onClick={onOpen}
            display={{ base: "block", lg: "none" }}
          />
          <Heading fontSize="28px" fontWeight="medium">
            {title}
          </Heading>
          <Menu>
            <MenuButton>
              <Icon as={PiUserCircleThin} fontSize="38px" />
            </MenuButton>
            <MenuList>
              <Link to="/">
                <MenuItem>Dashboard</MenuItem>
              </Link>
              <Link to="/support">
                <MenuItem>Support</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </HStack>
      </Box>
    </Stack>
  );
};

export default TopNav;
