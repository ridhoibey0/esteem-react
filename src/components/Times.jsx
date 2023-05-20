import React, { useEffect, useState } from 'react'
import { Flex, Image, Text, Icon } from '@chakra-ui/react'
import { HiClock, HiMapPin } from "react-icons/hi2"

export const Times = () =>{

  const date = new Date();
  const day = date.getDay();
  const hours = set(date.getHours());
  const minute = set(date.getMinutes());
  const myDay = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum`at', 'Sabtu'];
  
  
  setTimeout(() =>{
    hours,
    minute,
    second
  }, 1000);
  

function set(e){
    e = e < 10 ? '0' + e : e;
    return e;
};

  return (
    <Flex
    margin="34px 24px"
    padding="1rem 0px"
    backgroundColor="background"
    justify="space-between"
    fontFamily="mukta"
    >
              <Flex 
              justify="flex-start"
              >
                  <Flex 
                  mr="8px"
                  >
                      <Icon 
                      as={HiMapPin} 
                      boxSize="24px" 
                      color="primary" 
                      />
                  </Flex>
                  <Flex
                  display="block"
                  >
                    <Text
                    fontSize="10px"
                    fontWeight="400"
                    mb="-5px"
                    >
                      17 Meter
                    </Text>
                    <Text
                    fontSize="12px"
                    fontWeight="700"
                    >
                      Di dalam sekolah
                    </Text>
                  </Flex>
              </Flex>
              <Flex 
              justify="flex-start"
              display="flex"
              >
                  <Flex 
                  mr="8px"
                  >
                      <Icon 
                      as={HiClock} 
                      boxSize="26px" 
                      />
                  </Flex>
                  <Flex
                  display="block"
                  >
                    <Text
                    fontSize="10px"
                    fontWeight="400"
                    mb="-5px"
                    >
                      {myDay[day]}
                    </Text>
                    <Text
                    fontSize="12px"
                    fontWeight="700"
                    >
                      {hours} : {minute}
                    </Text>
                  </Flex>
              </Flex>
          </Flex>
  )
}
