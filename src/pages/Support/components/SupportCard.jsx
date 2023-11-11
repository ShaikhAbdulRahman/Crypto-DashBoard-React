import {
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { IoMdMail } from "react-icons/io";

const SupportCard = () => {
  return (
    <Flex gap={4} flexDir={{
        base:"column",
        xl:"row"
    }}>
      <Stack maxW="24rem">
        <Icon as={IoMdMail} boxSize={6} color="p.purple" />
        <Text fontSize="32px" fontWeight="medium">
          Contact Us
        </Text>
        <Text fontSize="sm" color="black.60">
          Have a question or just want to know more? Feel free to reach out to
          us.
        </Text>
      </Stack>
      <Card p="24px" borderRadius="16px" flexGrow={1}>
        <Stack spacing={6}>
          <Text fontWeight="medium" fontSize="sm">
            You will receive response within 24 hours of time of submit.
          </Text>
          <HStack flexDir={{
        base:"column",
        md:"row"
    }}>
            <FormControl>
              <FormLabel fontSize="sm">Name</FormLabel>
              <Input fontSize="sm" placeholder="Enter Your Name" />
            </FormControl>
            <FormControl>
              <FormLabel fontSize="sm">SureName</FormLabel>
              <Input fontSize="sm" placeholder="Enter Your Surename" />
            </FormControl>
          </HStack>
          <FormControl>
            <FormLabel fontSize="sm">Email</FormLabel>
            <Input fontSize="sm" placeholder="name@gmail.com" type="email" />
          </FormControl>
          <FormControl>
            <FormLabel fontSize="sm">Message</FormLabel>
            <Textarea fontSize="sm" placeholder="Enter Your Message" />
          </FormControl>
          <Checkbox>
            <Text fontSize="14px">
              I agree with{" "}
              <Box as="span" color="p.purple">
                {" "}
                Terms & Conditions.
              </Box>
            </Text>
          </Checkbox>
          <Stack>
            <Button>Send a Message</Button>
            <Button colorScheme="gray">Book a Meeting</Button>
          </Stack>
        </Stack>
      </Card>
    </Flex>
  );
};

export default SupportCard;
