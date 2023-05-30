import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  Flex,
  Image,
  Text,
  VStack,
  Icon,
  Skeleton,
} from "@chakra-ui/react";
import { IoMdLogIn, IoMdLogOut, IoIosRemove } from "react-icons/Io";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { Times } from "@/components/Times";
import { Link } from "react-router-dom";
import { getAttendance, getUser } from "@/services";

import { formatDate } from "@/utils/formatDate";
import useUserStore from "@/store/userStore";
import { formatTime } from "@/utils/formatTime";

const Home = () => {
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);
  const [historyAttendence, setHistory] = useState([]);
  const [currentTime, setCurrentTime] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUser();
        const response2 = await getAttendance();
        setUser(response.data.data[0]);
        setHistory(response2.data.data);
      } catch (error) {
        // Handle error if necessary

        console.error(error);
      }
    };
    fetchData();
  }, [getUser]);

  return (
    <Box bgColor="secondary" fontFamily="mukta" overflow="hidden">
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
            <Flex display="inline" margin="0px 24px">
              {user ? (
                <Image src={user.foto} maxW="100px" alt="" />
              ) : (
                <Skeleton w="100px" h="100px" />
              )}
            </Flex>
            <Flex display="grid">
              <Text margin="0" fontSize="md" fontWeight="700">
                {user ? (
                  user.nama
                ) : (
                  <Skeleton w="120px" h="20px" borderRadius="0.25rem" />
                )}
              </Text>
              <Text margin="0" fontSize="sm" color="textDark">
                {user ? (
                  `${user.tingkat} ${user.jurusan}`
                ) : (
                  <Skeleton w="50px" mt="2px" h="16px" borderRadius="0.25rem" />
                )}
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
            {/* <VStack>
              {currentTime.getHours() <= 9 && currentTime.getHours() >= 6 ? (
                <Link to="/presensi">
                  <Flex
                    p="22px"
                    bgColor="#BF080A"
                    borderRadius="8px"
                    color="white"
                  >
                    <Icon as={IoMdLogIn} boxSize="44px" />
                  </Flex>
                </Link>
              ) : (
                <Flex
                  p="22px"
                  bgColor="secondary"
                  borderRadius="8px"
                  color="textDark"
                >
                  <Icon as={IoMdLogIn} boxSize="44px" />
                </Flex>
              )}
              <Text fontSize="md">Presensi Masuk</Text>
            </VStack>
            <VStack>
              {currentTime.getHours() >= 16 && currentTime.getHours() <= 19 ? (
                <Link to="/presensi/out">
                  <Flex
                    p="23px"
                    bgColor="#BF080A"
                    borderRadius="8px"
                    color="white"
                  >
                    <Icon as={IoMdLogOut} boxSize="44px" />
                  </Flex>
                </Link>
              ) : (
                <Flex
                  p="23px"
                  bgColor="secondary"
                  borderRadius="8px"
                  color="textDark"
                >
                  <Icon as={IoMdLogOut} boxSize="44px" />
                </Flex>
              )}
              <Text fontSize="md">Presensi Pulang</Text>
            </VStack> */}
          </Flex>
          <Box
            padding="0px 24px"
            mt="38px"
            pb="2rem"
            backgroundColor="background"
          >
            <Flex justify="space-between" display="flex" mb="24px">
              <Text fontSize="lg" fontWeight="700">
                Histori Presensi
              </Text>
              <Link
                to="/history"
                color="primary"
                fontWeight="700"
                fontSize="lg"
              >
                Lihat semua
              </Link>
            </Flex>
            {historyAttendence.length == 0 ? (
              <Skeleton height="115px" borderRadius="20px" />
            ) : (
              historyAttendence.map((ul) => (
                <Box
                  key={ul.id}
                  borderRadius="20px"
                  mb="2rem"
                  display="grid"
                  height="115px"
                  borderLeft="24px solid #BF080A"
                  backgroundColor="background"
                  boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                  justify="space-between"
                >
                  <Flex margin="0px 24px" mb="0" padding="0" align="end">
                    <Text fontSize="md" color="textDark">
                      {formatDate(ul.tanggal_masuk)}
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
                        fontSize="md"
                        fontWeight="700"
                      >
                        Waktu Masuk
                      </Text>
                      <Text
                        color="black"
                        margin="0"
                        fontSize="md"
                        fontWeight="700"
                      >
                        {formatTime(ul.jam_masuk)}
                      </Text>
                      <Text fontSize="md" color="textDark">
                        {ul.status}
                      </Text>
                    </Box>
                    <Flex align="center">
                      <Icon
                        as={IoIosRemove}
                        color="primary"
                        margin="0"
                        fontSize="md"
                        alignSelf="center"
                        fontWeight="700"
                      />
                    </Flex>
                    <Box>
                      <Text
                        color="primary"
                        margin="0"
                        fontSize="md"
                        fontWeight="700"
                      >
                        Waktu Pulang
                      </Text>
                      <Text
                        color="black"
                        margin="0"
                        fontSize="md"
                        fontWeight="700"
                      >
                        {ul.jam_pulang !== null ? (
                          ul.jam_pulang
                        ) : (
                          <Icon
                            as={IoIosRemove}
                            color="primary"
                            margin="0"
                            fontSize="md"
                            alignSelf="center"
                            fontWeight="700"
                          />
                        )}
                      </Text>
                      <Text fontSize="md" color="textDark">
                        {ul.jam_pulang == null
                          ? "Belum Absen Pulang"
                          : "Sudah absen pulang"}
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              ))
            )}
          </Box>
        </Box>
        <Navbar />
      </Box>
    </Box>
  );
};

export default Home;
