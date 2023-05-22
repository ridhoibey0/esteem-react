import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Icon, Heading, Skeleton } from "@chakra-ui/react";
import { history } from "@/components/history";
import { Link } from "react-router-dom";

import { BiArrowBack } from "react-icons/Bi";
import { IoIosRemove } from "react-icons/Io";
import { formatDate } from "@/utils/formatDate";
import useHistoryStore from "@/store/userHistory";
import { getAttendance } from "@/services";

const History = () => {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getAttendance();
      setHistory(response.data.data);
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
        <Flex margin="0px 24px" padding="42px 0px" alignItems="center">
          <Link to="/" boxSize="16px">
            <Icon as={BiArrowBack} boxSize="16px" />
          </Link>
          <Heading fontSize="16px" fontWeight="700" ml="28px">
            History Presensi
          </Heading>
        </Flex>
        <Box padding="0px 24px" backgroundColor="background">
          {history.length === 0 ? (
            <Skeleton height="115px" borderRadius="20px" />
          ) : (
            history.map((ul) => (
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
                <Flex margin="0px 24px" mb="0" padding="0" align="end">
                  <Text fontSize="14px" color="textDark">
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
                      {ul.waktu_masuk}
                    </Text>
                    <Text fontSize="14px" color="textDark">
                      {ul.status}
                    </Text>
                  </Box>
                  <Flex align="center">
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
                    <Text
                      color="black"
                      margin="0"
                      fontSize="14px"
                      fontWeight="700"
                    >
                      {ul.waktu_pulang !== null ? (
                        ul.waktu_pulang
                      ) : (
                        <Icon
                          as={IoIosRemove}
                          color="primary"
                          margin="0"
                          fontSize="14px"
                          alignSelf="center"
                          fontWeight="700"
                        />
                      )}
                    </Text>
                    <Text fontSize="14px" color="textDark">
                      {ul.waktu_pulang == null
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
    </Box>
  );
};

export default History;
