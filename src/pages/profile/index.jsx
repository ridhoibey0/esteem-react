import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  Flex,
  Text,
  Button,
  Icon,
  Skeleton,
} from "@chakra-ui/react";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";

import { MdEdit } from "react-icons/Md";
import { AiFillQuestionCircle, AiFillExclamationCircle } from "react-icons/Ai";

import useUserStore from "@/store/userStore";
import { logout } from "@/services";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box bgColor="secondary" fontFamily="mukta">
      <Box
        maxW="540px"
        minH="100vh"
        margin="auto"
        backgroundColor="background"
        position="relative"
      >
        <Header />
        <Box>
          <Flex display="grid" justify="center" mt="-60px" textAlign="center">
            {user ? (
              <>
                <Image
                  src={user.foto}
                  alt=""
                  margin="auto"
                  mb="16px"
                  maxW="125px"
                  rounded="full"
                />
                <Text margin="0" fontSize="lg" fontWeight="700">
                  {user.nama}
                </Text>
                <Text
                  margin="0"
                  fontSize="sm"
                  fontWeight="400"
                  color="secondary"
                >
                  Sistem Informatika Jaringan Dan Aplikasi
                </Text>
              </>
            ) : (
              <>
                <Skeleton w="125px" mb="16px" h="125px" rounded="full" />
                <Skeleton w="100%" mb="5px" h="10px" />
                <Skeleton w="100%" h="10px" />
              </>
            )}
          </Flex>
          <Box m="0 24px" mt="40px" display="grid" gap="20px">
            <Flex
              display="flex"
              padding="10px 0"
              alignItems="center"
              borderBottom="1px solid black"
            >
              <Icon as={MdEdit} boxSize="20px" color="primary" />
              <Text ml="32px" fontWeight="700">
                Edit Profil
              </Text>
            </Flex>
            <Flex
              display="flex"
              padding="10px 0"
              alignItems="center"
              borderBottom="1px solid black"
            >
              <Icon as={AiFillQuestionCircle} boxSize="20px" color="primary" />
              <Text ml="32px" fontWeight="700">
                Tentang Kami
              </Text>
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
              <Text ml="32px" fontWeight="700">
                Pusat bantuan
              </Text>
            </Flex>
          </Box>
          <Box margin="40px 24px">
            <Button variant="primary" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        </Box>
        <Navbar />
      </Box>
    </Box>
  );
};

export default Profile;
