import { RiAlarmFill, RiListUnordered, RiUser3Fill } from "react-icons/ri";
import React from "react";
import { Box, Icon, Text, Flex, Image } from "@chakra-ui/react";
import "@/assets/style.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Flex
      className="nav"
      display="flex"
      justify="space-between"
      backgroundColor="background"
      fontWeight="700"
      fontSize="sm"
      fontFamily="mukta"
      color="secondary"
      position="fixed"
      width="540px"
      bottom="0"
      textAlign="center"
      boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    >
      <Box margin="0px 40px" justifyContent="space-between">
        <Link
          to="/"
          textDecorationLine="none"
          borderTop="2px solid primary"
          padding="0.5rem 0"
        >
          <Icon as={RiAlarmFill} boxSize="20px" lineHeight="0" />
          <Text>Presensi</Text>
        </Link>
      </Box>
      <Box margin="0px 40px">
        <Link to="/rekap" textDecoration="none" padding="0.5rem 0">
          <Icon as={RiListUnordered} boxSize="20px" lineHeight="0" />
          <Text>Rekap</Text>
        </Link>
      </Box>
      <Box margin="0px 40px">
        <Link
          to="/profile"
          textDecoration="none"
          _active={{ color: "primary" }}
          padding="0.5rem 0"
        >
          <Icon as={RiUser3Fill} boxSize="20px" lineHeight="0" />
          <Text>Profile</Text>
        </Link>
      </Box>
    </Flex>
  );
};
