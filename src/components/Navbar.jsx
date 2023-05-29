import {
  RiAlarmFill,
  RiCamera2Fill,
  RiHistoryFill,
  RiListUnordered,
  RiUser3Fill,
} from "react-icons/ri";
import React, { useRef } from "react";
import { Box, Icon, Text, Flex, Image, Input } from "@chakra-ui/react";
import "@/assets/style.css";
import { NavLink, useLocation } from "react-router-dom";

export const Navbar = () => {
  const fileInputRef = useRef();
  function isActive(path) {
    const location = useLocation();
    return location.pathname === path;
  }
  return (
    <Flex
      className="nav"
      display="flex"
      justify="space-around"
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
      p="12px"
    >
      <Box>
        <NavLink
          exact
          to="/"
          padding="0.5rem 0"
          className={isActive("/") ? "active" : ""}
          style={{ fontWeight: "bold" }}
        >
          <Icon as={RiAlarmFill} boxSize="20px" lineHeight="0" />
          <Text>Presensi</Text>
        </NavLink>
      </Box>
      <Box marginRight="100px">
        <NavLink
          to="/history"
          textDecoration="none"
          padding="0.5rem 0"
          className={isActive("/history") ? "active" : ""}
        >
          <Icon as={RiHistoryFill} boxSize="20px" lineHeight="0" />
          <Text>History</Text>
        </NavLink>
      </Box>
      <Box
        backgroundColor="primary"
        width="100px"
        height="75px"
        top="-15px"
        rounded="lg"
        pos="absolute"
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100%"
          onClick={() => fileInputRef.current.click()}
        >
          <Icon
            as={RiCamera2Fill}
            boxSize="20px"
            lineHeight="0"
            cursor="pointer"
          />
          <Text>Presensi</Text>
          <Input
            w="100%"
            height="100%"
            opacity="0"
            type="file"
            accept="image/*"
            capture="environment"
            ref={fileInputRef}
            pos="absolute"
            top="0"
            left="0"
            zIndex="-1"
          />
        </Flex>
      </Box>
      <Box>
        <NavLink
          to="/rekap"
          textDecoration="none"
          padding="0.5rem 0"
          className={isActive("/rekap") ? "active" : ""}
        >
          <Icon as={RiListUnordered} boxSize="20px" lineHeight="0" />
          <Text>Rekap</Text>
        </NavLink>
      </Box>
      <Box>
        <NavLink
          to="/profile"
          textDecoration="none"
          className={isActive("/profile") ? "active" : ""}
          padding="0.5rem 0"
        >
          <Icon as={RiUser3Fill} boxSize="20px" lineHeight="0" />
          <Text>Profile</Text>
        </NavLink>
      </Box>
    </Flex>
  );
};
