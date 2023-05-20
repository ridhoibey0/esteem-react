import React from 'react'
import { Box, Image, Flex, Text, Button, Icon } from '@chakra-ui/react';
import { Header } from '@/components/Header';
import { Navbar } from '@/components/Navbar';

import { MdEdit } from 'react-icons/Md'
import { AiFillQuestionCircle, AiFillExclamationCircle } from 'react-icons/Ai'

import Profiles from "@/assets/img/profile.png";

const Profile = () => {
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
            display="grid"
            justify="center"
            mt="-60px"
            textAlign="center"
            >
                <Image 
                src={Profiles} 
                alt="" 
                margin="auto"
                mb="16px"
                />
                <Text
                margin="0"
                fontSize="16px"
                fontWeight="700"
                >
                    Raihan Juliandra Rahman
                </Text>
                <Text
                margin="0"
                fontSize="12px"
                fontWeight="400"
                color="secondary"
                >
                    Sistem Informatika Jaringan Dan Aplikasi
                </Text>
            </Flex>
            <Box
            m="0 24px"
            mt="40px"
            display="grid"
            gap="20px"
            >
                <Flex 
                display="flex"
                padding="10px 0"
                alignItems="center"
                borderBottom="1px solid black"
                >
                    <Icon 
                    as={MdEdit} 
                    boxSize="20px"
                    color="primary"
                    />
                    <Text
                    ml="32px"
                    fontWeight="700"
                    >
                        Edit Profil</Text>
                </Flex>
                <Flex
                display="flex"
                padding="10px 0"
                alignItems="center"
                borderBottom="1px solid black"
                >
                    <Icon 
                    as={AiFillQuestionCircle} 
                    boxSize="20px"
                    color="primary" 
                    />
                    <Text
                    ml="32px"
                    fontWeight="700"
                    >
                        Tentang Kami</Text>
                </Flex>
                <Flex
                display="flex"
                padding="10px 0"
                alignItems="center"
                borderBottom="1px solid black"
                >
                    <Icon 
                    as={AiFillExclamationCircle} 
                    boxSize="20px"
                    color="primary"
                    />
                    <Text
                    ml="32px"
                    fontWeight="700"
                    >
                        Pusat bantuan</Text>
                </Flex>
            </Box>
            <Box
            margin="40px 24px"
            >
                <Button
                variant="primary"
                >
                    Logout
                </Button>
            </Box>
        </Box>
        <Navbar />
    </Box>
    </Box>
  )
}

export default Profile;
