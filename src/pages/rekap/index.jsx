import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Divider,
  Skeleton,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Tabs,
} from "@chakra-ui/react";

import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";

import Calendar from "@/assets/img/calendar.svg";
import Clock from "@/assets/img/clock.svg";
import Clock2 from "@/assets/img/clock2.svg";
import { getAttendance } from "@/services";
import { formatDate } from "@/utils/formatDate";
import { formatTime } from "@/utils/formatTime";

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
    <Box bgColor="secondary" fontFamily="mukta" overflow="hidden">
      <Box
        maxW="540px"
        minH="100vh"
        margin="auto"
        backgroundColor="background"
        position="relative"
      >
        <Header />
        <Box margin="0 24px" mt="40px">
          <Tabs variant="unstyled">
            <TabList mb="1.5rem">
              <Tab
                _selected={{ color: "white", background: "#BF080A" }}
                borderRadius="8px 0 0 8px"
                w="full"
                background="#EFEFEF"
              >
                Rekap Masuk
              </Tab>
              <Tab
                _selected={{ color: "white", background: "#BF080A" }}
                borderRadius="0 8px 8px 0"
                w="full"
                background="#EFEFEF"
              >
                Rekap Pulang
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {rekap.length === 0 ? (
                  <Skeleton height="115px" borderRadius="20px" />
                ) : (
                  rekap.map((ul, li) => (
                    <Box
                      key={ul.id}
                      display="grid"
                      gridTemplateColumns="56px 60% 40%"
                      alignItems="center"
                      justifyContent="flex-start"
                    >
                      <Flex>
                        <Image
                          src={ul.foto}
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
                          <Image
                            src={Calendar}
                            alt=""
                            width="16px"
                            height="16px"
                          />
                          <Text fontSize="sm" margin="0" ml="8px">
                            {formatDate(ul.tanggal_masuk)}
                          </Text>
                        </Flex>
                        <Flex
                          display="flex"
                          alignItems="center"
                          color="primary"
                          fontWeight="700"
                        >
                          <Image
                            src={Clock}
                            alt=""
                            width="16px"
                            height="16px"
                          />
                          <Text fontSize="sm" margin="0" ml="8px">
                            {/* {ul.ket} */}
                            Hadir
                          </Text>
                        </Flex>
                      </Flex>
                      <Flex>
                        <Image src={Clock2} alt="" width="16px" height="16px" />
                        <Text fontSize="sm" margin="0" ml="8px">
                          {formatTime(ul.jam_masuk)}
                        </Text>
                      </Flex>
                      <Divider orientation="horizontal" mt="20px" mb="20px" />
                    </Box>
                  ))
                )}
              </TabPanel>
              <TabPanel>
                {rekap.map((item) => (
                  <React.Fragment key={item.id}>
                    {item.jam_pulang ? (
                      <Box
                        key={item.id}
                        display="grid"
                        gridTemplateColumns="56px 60% 40%"
                        alignItems="center"
                        justifyContent="flex-start"
                      >
                        <Flex>
                          <Image
                            src={item.foto_pulang}
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
                            <Image
                              src={Calendar}
                              alt=""
                              width="16px"
                              height="16px"
                            />
                            <Text fontSize="sm" margin="0" ml="8px">
                              {formatDate(item.tanggal_masuk)}
                            </Text>
                          </Flex>
                          <Flex
                            display="flex"
                            alignItems="center"
                            color="primary"
                            fontWeight="700"
                          >
                            <Image
                              src={Clock}
                              alt=""
                              width="16px"
                              height="16px"
                            />
                            <Text fontSize="sm" margin="0" ml="8px">
                              {/* {item.ket} */}
                              Hadir
                            </Text>
                          </Flex>
                        </Flex>
                        <Flex>
                          <Image
                            src={Clock2}
                            alt=""
                            width="16px"
                            height="16px"
                          />
                          <Text fontSize="sm" margin="0" ml="8px">
                            {formatTime(item.jam_pulang)}
                          </Text>
                        </Flex>
                        <Divider orientation="horizontal" mt="20px" mb="20px" />
                      </Box>
                    ) : (
                      ""
                    )}
                  </React.Fragment>
                ))}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Navbar />
      </Box>
    </Box>
  );
};

export default Rekap;
