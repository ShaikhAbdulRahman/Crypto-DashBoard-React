import React from "react";
import { CustomCard } from "../chakra/CustomCard";
import { HStack, Stack, Tag, Text } from "@chakra-ui/react";

const InfoCard = ({ imgURL }) => {
  return (
    <>
    <CustomCard bgImage={imgURL} bgSize="cover" bgRepeat="no-repeat">      
     <Tag bg="p.purple" color="white" borderRadius="full">
          Loans
      </Tag>
      <Text mt={4} fontSize="18px" fontWeight="medium" lineHeight={"22px"}>
        Learn more about Loans – Keep your Bitcoin, access it’s value without
        selling it
      </Text>
    </CustomCard>
    </>
  );
};

export default InfoCard;
