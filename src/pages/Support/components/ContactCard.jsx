import {
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsChatFill } from "react-icons/bs";
import { CustomCard } from "../../../chakra/CustomCard";

const ContactCard = () => {
  return (
    <Flex
      gap={4}
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <Grid
        mt={"60px"}
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          xl: "repeat(2,1fr)",
        }}
        gap={6}
        mb="10"
      >
        <GridItem colSpan={1}>
          <Icon as={BsChatFill} boxSize={6} color="p.purple" />
          <Text fontSize="32px" fontWeight="medium">
            Live Chat
          </Text>
          <Text fontSize="sm" color="black.60">
            Don’t have time to wait for the answer? Chat with us now.
          </Text>
        </GridItem>
        <GridItem colSpan={1}>
          <CustomCard
            bgImage={"/Visual2.svg"}
            bgSize="cover"
            bgRepeat="no-repeat"
            bgColor={"p.purple"}
            color="white"
            w={"30rem"}
            h={"120px"}
          >
            <Tag color="p.purple" bg="white" borderRadius="full">
              Chatbot
            </Tag>
            <Text
              mt={4}
              fontSize="18px"
              fontWeight="medium"
              lineHeight={"22px"}
            >
              Chat with us now
            </Text>
          </CustomCard>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default ContactCard;
