import React from 'react'
import { CustomCard } from '../chakra/CustomCard'
import { Tag, Text } from '@chakra-ui/react'

const InfoCard2 = ({imgURL}) => {
  return (
    <CustomCard bgImage={imgURL} bgSize="cover" bgRepeat="no-repeat" bgColor    ={"p.purple"} color="white">
    <Tag color="p.purple" bg="white" borderRadius="full">
      Contact
    </Tag>
    <Text mt={4} fontSize="18px" fontWeight="medium" lineHeight={"22px"}>
    Learn more about our real estate, mortgage, and corporate account services
    </Text>
  </CustomCard>
  )
}

export default InfoCard2