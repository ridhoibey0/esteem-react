import React from 'react';
import { Box, Flex, Text, Image, Divider } from '@chakra-ui/react';

import { Header } from '@/components/Header';
import { Navbar } from '@/components/Navbar';

import Rekaps from "@/assets/img/rekap.png";
import Calendar from "@/assets/img/calendar.svg";
import Clock from "@/assets/img/clock.svg";
import Clock2 from "@/assets/img/clock2.svg";


const Rekap = () => {
    const Menu = [
        {
            rekaps: Rekaps,
            calendar: Calendar,
            clock: Clock,
            clock2: Clock2,
            hari: "Jumat, 27 Januari 2023",
            ket: "Hadir",
            jam: "06.94",
        },
        {
            rekaps: Rekaps,
            calendar: Calendar,
            clock: Clock,
            clock2: Clock2,
            hari: "Kamis, 26 Januari 2023",
            ket: "Terlambat",
            jam: "07.20",
            },
        {
            rekaps: Rekaps,
            calendar: Calendar,
            clock: Clock,
            clock2: Clock2,
            hari: "Rabu, 25 Januari 2023",
            ket: "Izin",
            jam: "06.94",
        }
    ]
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
        <Box 
        margin="0 24px"
        mt="40px"
        >
            {Menu.map((ul, li) => (   
                <Box
                display="grid"
                gridTemplateColumns="56px 60% 40%"
                alignItems="center"
                justifyContent="flex-start"
                >
                    <Flex>
                        <Image 
                        src={ul.rekaps} 
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
                        <Flex
                        display="flex"
                        alignItems="center"
                        >  
                            <Image
                            src={ul.calendar}
                            alt="" 
                            width="16px"
                            height="16px"
                            />
                            <Text
                            fontSize="12px"
                            margin="0"
                            ml="8px"
                            >
                            {ul.hari}
                            </Text>
                        </Flex>
                        <Flex 
                        display="flex"
                        alignItems="center"
                        color="primary"
                        fontWeight="700"
                        >
                            <Image
                            src={ul.clock} 
                            alt="" 
                            width="16px"
                            height="16px"
                            />
                            <Text
                            fontSize="12px"
                            margin="0"
                            ml="8px"
                            >
                                {ul.ket}
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex
                    >
                        <Image
                        src={ul.clock2}
                        alt=""
                        width="16px"
                        height="16px"
                        />
                        <Text
                        fontSize="12px"
                        margin="0"
                        ml="8px"
                        >
                            {ul.jam}
                        </Text>
                    </Flex>
                    <Divider 
                    orientation='horizontal'
                    mt="20px"
                    mb="20px"
                    />
                </Box>
            ))}
        </Box>
        <Navbar />
    </Box>
    </Box>
  )
}

export default Rekap;
