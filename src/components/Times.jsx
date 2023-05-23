import React, { useEffect, useState } from "react";
import { Flex, Image, Text, Icon } from "@chakra-ui/react";
import { HiClock, HiMapPin } from "react-icons/hi2";
import { getDistance } from "geolib";

export const Times = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentTime]);

  useEffect(() => {
    let watchId;

    const startWatchPosition = () => {
      watchId = navigator.geolocation.watchPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error occurred while watching position:", error);
        }
      );
    };

    startWatchPosition();

    return () => {
      if (watchId) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, []);

  const day = currentTime.getDay();
  const hours = set(currentTime.getHours());
  const minute = set(currentTime.getMinutes());
  const myDay = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];

  function set(e) {
    e = e < 10 ? "0" + e : e;
    return e;
  }

  const distance = getDistance(
    {
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
    },
    {
      latitude: -6.8979622,
      longitude: 107.6242252,
    }
  );

  const maxDistance = 100;

  return (
    <Flex
      margin="34px 24px"
      padding="1rem 0px"
      backgroundColor="background"
      justify="space-between"
      fontFamily="mukta"
    >
      <Flex justify="flex-start">
        <Flex mr="8px">
          <Icon as={HiMapPin} boxSize="24px" color="primary" />
        </Flex>
        <Flex display="block">
          <Text fontSize="xs" fontWeight="400" mb="-5px">
            {distance} Meter
          </Text>
          <Text fontSize="sm" fontWeight="700">
            {distance <= maxDistance ? "Di dalam sekolah" : "Di Luar sekolah"}
          </Text>
        </Flex>
      </Flex>
      <Flex justify="flex-start" display="flex">
        <Flex mr="8px">
          <Icon as={HiClock} boxSize="26px" />
        </Flex>
        <Flex display="block">
          <Text fontSize="xs" fontWeight="400" mb="-5px">
            {myDay[day]}
          </Text>
          <Text fontSize="sm" fontWeight="700">
            {hours} : {minute}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
