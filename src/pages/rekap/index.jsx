import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Image, Divider, Skeleton } from "@chakra-ui/react";

import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";

import Rekaps from "@/assets/img/rekap.png";
import Calendar from "@/assets/img/calendar.svg";
import Clock from "@/assets/img/clock.svg";
import Clock2 from "@/assets/img/clock2.svg";
import { getAttendance } from "@/services";
import { formatDate } from "@/utils/formatDate";
import useHistoryStore from "@/store/userHistory";

const Rekap = () => {
  const [rekap, setRekap] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getAttendance();
      setRekap(response.data.data);
    };
    fetchData();
  }, [getAttendance]);
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
        <Box margin="0 24px" mt="40px">
          {rekap.length === 0 ? (
            <Skeleton height="115px" borderRadius="20px" />
          ) : (
            rekap.map((ul, li) => (
              <>
                <Box
                  display="grid"
                  gridTemplateColumns="56px 60% 40%"
                  alignItems="center"
                  justifyContent="flex-start"
                >
                  <Flex>
                    <Image
                      src={ul.image_masuk}
                      alt=""
                      width="56px"
                      height="56px"
                    />
                  </Flex>
                  <Flex
                    display="grid"
                    gridTemplateColumns="100%"
                    gap="8px"
                    ml="1rem"
                  >
                    <Flex display="flex" alignItems="center">
                      <Image src={Calendar} alt="" width="16px" height="16px" />
                      <Text fontSize="12px" margin="0" ml="8px">
                        {formatDate(ul.tanggal_masuk)}
                      </Text>
                    </Flex>
                    <Flex
                      display="flex"
                      alignItems="center"
                      color="primary"
                      fontWeight="700"
                    >
                      <Image src={Clock} alt="" width="16px" height="16px" />
                      <Text fontSize="12px" margin="0" ml="8px">
                        {/* {ul.ket} */}
                        Hadir
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex>
                    <Image src={Clock2} alt="" width="16px" height="16px" />
                    <Text fontSize="12px" margin="0" ml="8px">
                      {ul.waktu_masuk}
                    </Text>
                  </Flex>
                  <Divider orientation="horizontal" mt="20px" mb="20px" />
                </Box>
                {ul.waktu_pulang === null ? (
                  ""
                ) : (
                  <Box
                    display="grid"
                    gridTemplateColumns="56px 60% 40%"
                    alignItems="center"
                    justifyContent="flex-start"
                  >
                    <Flex>
                      <Image src={ul.image} alt="" width="56px" height="56px" />
                    </Flex>
                    <Flex
                      display="grid"
                      gridTemplateColumns="100%"
                      gap="8px"
                      ml="1rem"
                    >
                      <Flex display="flex" alignItems="center">
                        <Image
                          src={Calendar}
                          alt=""
                          width="16px"
                          height="16px"
                        />
                        <Text fontSize="12px" margin="0" ml="8px">
                          {formatDate(ul.tanggal_pulang)}
                        </Text>
                      </Flex>
                      <Flex
                        display="flex"
                        alignItems="center"
                        color="primary"
                        fontWeight="700"
                      >
                        <Image src={Clock} alt="" width="16px" height="16px" />
                        <Text fontSize="12px" margin="0" ml="8px">
                          {/* {ul.ket} */}
                          Pulang
                        </Text>
                      </Flex>
                    </Flex>
                    <Flex>
                      <Image src={Clock2} alt="" width="16px" height="16px" />
                      <Text fontSize="12px" margin="0" ml="8px">
                        {ul.waktu_pulang}
                      </Text>
                    </Flex>
                    <Divider orientation="horizontal" mt="20px" mb="20px" />
                  </Box>
                )}
              </>
            ))
          )}
        </Box>
        <Navbar />
      </Box>
    </Box>
  );
};

export default Rekap;
