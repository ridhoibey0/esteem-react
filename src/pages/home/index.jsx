import React from "react";
import { Container, Box, Flex, Image, Text, VStack, Link, Icon } from "@chakra-ui/react";
import { IoMdLogIn, IoMdLogOut , IoIosRemove } from 'react-icons/Io'
import { Header } from "@/components/Header"; 
import { Navbar } from "@/components/Navbar";
import { Times } from "@/components/Times";
import { history } from "@/components/history"

import Profile from "@/assets/img/profile.svg";

const Home = () => {
    const date = new Date()
    const hours = date.getHours();
    if(hours >= 6 && hours <= 8){
        
    };
    if(hours >= 15 && hours <= 17){
        
    };


  return (
    <Box
    bgColor="secondary"
    fontFamily="mukta"
    >
      <Box
      maxW="540px"
      minH="100vh"
      margin="auto"
      backgroundColor="background"
      position="relative"
      >
        <Header />
        <Box>
          <Flex
            margin="0px 24px"
            mt="-2.5rem"             
            padding="1rem 0px"
            backgroundColor="background"
            borderRadius="0.5rem"
            justify="flex-start"
            alignItems="center"
            alignContent="center"
            display="flex"
            boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
          >
              <Flex
              display="inline"
              margin="0px 24px"
              >
                <Image src={Profile} alt="" />
              </Flex>
              <Flex
              display="grid"
              >
              <Text
              margin="0"
              fontSize="14px"
              fontWeight="700"
              >
                Raihan Juliandra Rahman
              </Text>
              <Text
                  margin="0"
                  fontSize="12px"
                  color="textDark"
              >
                XII SIJA
              </Text>
              </Flex>
          </Flex>
          <Times />
          <Flex 
          margin="0px 64px"
          backgroundColor="background"
          justify="space-between"
          display="flex"
          >
              <VStack>
                <Flex
                p="22px"
                bgColor="secondary"
                borderRadius="8px"
                color="textDark"
                >
                  <Icon
                  as={IoMdLogIn}
                  boxSize="44px"
                  />
                  </Flex>
                  <Text
                  fontSize="14px"
                  >
                    Presensi Masuk</Text>
              </VStack>
              <VStack
              >
                <Flex
                p="23px"
                bgColor="secondary"
                borderRadius="8px"
                color="textDark"
                >
                  <Icon
                  as={IoMdLogOut}
                  boxSize="44px"
                  />
                </Flex>
                  <Text
                  fontSize="14px"
                  >
                    Presensi Pulang</Text>
              </VStack>
          </Flex>
          <Box
          padding="0px 24px"
          mt="38px"
          pb="2rem"
          backgroundColor="background"
          >
              <Flex
              justify="space-between"
              display="flex"
              mb="24px"
              >
                <Text
                fontSize="16px"
                fontWeight="700"
                >
                  Histori Presensi
                </Text>
                <Link 
                href="/history"
                textDecoration="none"
                color="primary"
                fontWeight="700"
                fontSize="16px"
                textAlign="center"
                >Lihat semua
                </Link>
              </Flex>
              {history.slice(0,2).map((ul) => ( 
              <Box
              borderRadius="20px"
              mb="2rem"
              display="grid"
              height="115px"
              borderLeft="24px solid #BF080A"
              backgroundColor="background"
              boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
              justify="space-between"
              >
                  <Flex
                  margin="0px 24px"
                  mb="0"
                  padding="0"
                  align="end"
                  >
                      <Text
                      fontSize="14px"
                      color="textDark"
                      >
                        {ul.tanggal}
                      </Text>
                  </Flex>
                  <Flex
                  backgroundColor="background"
                  padding="0"
                  margin="0px 24px"
                  justify="space-between"
                  display="flex"
                  >
                      <Box align="start">
                          <Text
                          color="primary"
                          margin="0"
                          fontSize="14px"
                          fontWeight="700"
                          >
                            Waktu Masuk
                          </Text>
                          <Text 
                          color="black"
                          margin="0"
                          fontSize="14px"
                          fontWeight="700"
                          >
                            {ul.jam}
                          </Text>
                          <Text
                          fontSize="14px"
                          color="textDark"
                          >
                            datang tepat waktu
                          </Text>
                      </Box>
                      <Flex
                      align="center"
                      >
                          <Icon
                          as={IoIosRemove}
                          color="primary"
                          margin="0"
                          fontSize="14px"
                          alignSelf="center"
                          fontWeight="700"
                          />
                      </Flex>
                      <Box>
                          <Text 
                          color="primary"
                          margin="0"
                          fontSize="14px"
                          fontWeight="700"
                          >
                            Waktu Pulang
                          </Text>
                          <Icon
                          as={IoIosRemove} 
                          color="primary"
                          margin="0"
                          fontSize="14px"
                          fontWeight="700"
                          />
                          <Text
                          fontSize="14px"
                          color="textDark"
                          >
                            Hasil belum keluar
                          </Text>
                      </Box>
                  </Flex>
              </Box>
              ))}
          </Box>
        </Box>
        <Navbar />
      </Box>
    </Box>
  );
};

export default Home;
