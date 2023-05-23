import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Heading,
  Icon,
  Link,
  Button,
} from "@chakra-ui/react";
import { BiArrowBack } from "react-icons/Bi";
import { RiFileTextFill } from "react-icons/ri";
import { Times } from "@/components/Times";

import Presensi from "@/assets/img/Presensi.png";

const Absen = () => {
  return (
    <Box bgColor="secondary" fontFamily="mukta">
      <Box
        maxW="540px"
        minH="100vh"
        margin="auto"
        backgroundColor="background"
        position="relative"
      >
        <Flex margin="0px 24px" padding="42px 0px" alignItems="center">
          <Link href="/" boxSize="16px">
            <Icon as={BiArrowBack} boxSize="16px" />
          </Link>
          <Heading fontSize="lg" fontWeight="700" ml="28px">
            History Presensi
          </Heading>
        </Flex>
        <Times />
        <Flex flexDir="column" class="content" m="0 24px" gap="24px">
          <Flex
            bgColor="primary"
            class="hadir"
            justify="space-between"
            gap="24px"
            align="center"
            p="16px 24px"
            borderRadius="8px"
            w="100%"
          >
            <Flex class="img">
              <Image src={Presensi} alt="" w="98px" h="90px" />
            </Flex>
            <Flex class="text" flexDir="column" gap="8px">
              <Heading fontSize="md" color="white">
                Ambil foto untuk mengisi presensi masuk
              </Heading>
              <Flex
                class="absen"
                align="center"
                bgColor="white"
                borderRadius="4px"
                width="-webkit-fit-content"
                p="4px 16px"
                gap="8px"
                color="primary"
              >
                <Icon data-feather="camera" />
                <Heading fontSize="xs">Ambil sekarang</Heading>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            class="card izin"
            bgColor="white"
            boxShadow="lg"
            gap="8px"
            justify="start"
            align="center"
            borderRadius="8px"
            w="100%"
          >
            <Flex
              class="vector"
              p="24px 2rem"
              bgColor="secondary"
              borderRadius="8px 0 0 8px"
            >
              <Icon as={RiFileTextFill} boxSize="20px" color="textDark" />
            </Flex>
            <Flex class="text" flexDir="column" justifySelf="start">
              <Heading fontSize="md" color="primary">
                Izin
              </Heading>
              <Text fontSize="xs">Lampirkan surat izin</Text>
            </Flex>
          </Flex>
          <Flex
            class="card sakit"
            bgColor="white"
            boxShadow="lg"
            gap="8px"
            justify="start"
            align="center"
            borderRadius="8px"
            w="100%"
          >
            <Flex
              class="vector"
              p="24px 2rem"
              bgColor="secondary"
              borderRadius="8px 0 0 8px"
            >
              <Icon as={RiFileTextFill} boxSize="20px" color="textDark" />
            </Flex>
            <Flex class="text" flexDir="column" justifySelf="start">
              <Heading fontSize="md" color="primary">
                Sakit
              </Heading>
              <Text fontSize="xs">Lampirkan surat keterangan dokter</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex m="24px 24px">
          <Button>Kirim</Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Absen;
